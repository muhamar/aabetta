import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';

import HistoryList from '../components/HistoryList';
import COLORS from '../constans/colors';

const HistoryScreen = () => {
  const tawaran = useSelector((state) => state.tawaran.tawaran);
  const user = useSelector((state) => state.auth.user);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = [];
    tawaran.map((item) => {
      if (item.id_peserta == user.id_peserta) {
        arr.push(item);
      }
    });
    setItems(arr);
  }, [tawaran, user]);
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Block middle style={styles.header}>
          <Text h5 style={styles.title}>
            HISTORY TAWARAN
          </Text>
        </Block> */}
        <Block padding={10}>
          {items.map((item, i) => (
            <HistoryList key={i} item={item} />
          ))}
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
});

export default HistoryScreen;
