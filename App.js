import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import Main from './app/main';
import store from './app/store';
import COLORS from './app/constans/colors';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GalioProvider theme={{ COLORS }}>
          <Main />
        </GalioProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
