import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Block, Text } from 'galio-framework';

import LoadingScreen from './LoadingScreen';
import COLORS from '../constans/colors';
import { fetchAbout } from '../services/axios';
import { baseApiUrl } from '../../config';

const AboutScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [about, setAbout] = useState({
    img: '',
    text: '',
  });

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      try {
        const data = (await fetchAbout()).data;
        setAbout(data.data);
      } catch (e) {
        console.log(e.message);
      }
      setLoading(false);
    };

    run();
  }, []);
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Block middle style={styles.header}>
          <Text h5 style={styles.title}>
            TENTANG AABETTA
          </Text>
        </Block>
        <Block padding={10} paddingBottom={30} paddingHorizontal={20}>
          <Block middle>
            <Image
              style={styles.brand}
              source={{
                uri: baseApiUrl + '/assets/img/' + about.img,
              }}
            />
          </Block>
          <Text
            size={16}
            style={{ fontFamily: 'Roboto-Light' }}
            color={COLORS.DARK_BLACK}>
            {about.text}
          </Text>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.DARK_BLACK,
    paddingVertical: 80,
  },
  title: {
    fontFamily: 'Roboto-light',
    color: COLORS.LIGHT_GREY,
    letterSpacing: 5,
    marginBottom: 10,
  },
  brand: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});

export default AboutScreen;
