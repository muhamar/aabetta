import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Text } from 'galio-framework';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constans/colors';

const WinList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor={COLORS.LIGHT_PRIMARY}
      style={styles.card}
      onPressIn={() => {
        navigation.navigate('Transaction', { item });
      }}>
      <>
        <Text size={10} style={styles.label}>
          {item.tawaran.waktu_penawaran}
        </Text>
        <Text size={16} style={styles.title}>
          {item.lelang.nama_ikan_hias}
        </Text>
        <Text size={12} style={styles.price}>
          IDR {item.tawaran.harga_tawar}
        </Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: COLORS.WHITE,
    borderRightColor: COLORS.PRIMARY,
    borderRightWidth: 4,
    borderRadius: 4,
  },
  label: {
    fontFamily: 'Roboto-Bold',
    letterSpacing: 1,
    paddingVertical: 3,
    color: COLORS.WHITE,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 2,
    width: 140,
    textAlign: 'center',
  },
  title: {
    paddingVertical: 5,
    color: COLORS.LIGHT_BLACK,
    fontFamily: 'Roboto',
  },
  price: {
    color: COLORS.BLACK,
    fontFamily: 'Roboto',
  },
});

export default WinList;
