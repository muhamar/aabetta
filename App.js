import React, {useState} from "react";
import { Provider, useDispatch } from 'react-redux'
import { Image } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from '@use-expo/font';
import { Asset } from "expo-asset";
import { GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import store from './store'

import { enableScreens } from "react-native-screens";
enableScreens();

import { Images, articles, argonTheme } from "./constants";
import Main from "./Main";

const assetImages = [
  Images.Logo,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];


articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default props => {
  const [isLoadingComplete, setLoading] = useState(false);

  let [fontsLoaded] = useFonts({
    'ArgonExtra': require('./assets/font/argon.ttf'),
  });

  function _loadResourcesAsync() {
    return Promise.all([...cacheImages(assetImages)]);
  }

  function _handleLoadingError(error) {
    console.warn(error);
  };

 function _handleFinishLoading() {
    setLoading(true);
  };

  if(!fontsLoaded && !isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else if(fontsLoaded) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <GalioProvider theme={argonTheme}>
            <Main />
          </GalioProvider>
        </NavigationContainer>
      </Provider>
    );
  } else {
    return null
  }
}
