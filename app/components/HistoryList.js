import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';
import COLORS from '../constans/colors';

const HistoryList = ({ item }) => {
  const [lelang, setLelang] = useState({});
  const lelangs = useSelector((state) => state.lelang.lelang);
  useEffect(() => {
    lelangs.map((i) => {
      if (i.id_lelang == item.id_lelang) {
        setLelang(i);
      }
    });
  }, [lelangs, item]);
  return (
    <Block style={styles.card}>
      <Text size={10} style={styles.label}>
        {item.waktu_penawaran}
      </Text>
      <Text size={16} style={styles.title}>
        {lelang && lelang.nama_ikan_hias}
      </Text>
      <Text size={12} style={styles.price}>
        IDR {item.harga_tawar}
      </Text>
    </Block>
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

export default HistoryList;
