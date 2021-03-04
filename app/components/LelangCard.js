import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { Block, Text } from 'galio-framework';
import COLORS from '../constans/colors';
import { baseApiUrl } from '../../config';

const LelangCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={COLORS.BRIGHT_PRIMARY}
      onPressIn={() => {
        if (item.come) {
          navigation.navigate('Lelang', { item });
        }
      }}
      style={styles.card}>
      <Block>
        <Block>
          <Image
            style={styles.image}
            source={{
              uri: baseApiUrl + '/assets/img/' + item.gambar,
            }}
          />
        </Block>
        <Block flex>
          <Text center size={12} style={styles.title}>
            {item.nama_ikan_hias}
          </Text>
          <Text center size={10} style={styles.price}>
            IDR {item.harga_buka}
          </Text>
        </Block>
      </Block>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    margin: 0,
    resizeMode: 'contain',
    flex: 1,
    display: 'flex',
    width: Dimensions.get('screen').width / 2 - 25,
    height: Dimensions.get('screen').width / 2 - 25,
  },
  title: {
    fontFamily: 'Roboto',
    paddingVertical: 5,
    color: COLORS.DARK_BLACK,
  },
  price: {
    fontFamily: 'Roboto',
    color: COLORS.PRIMARY,
  },
});

export default LelangCard;
