import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';

import WinList from '../components/WinList';
import COLORS from '../constans/colors';

const WinScreen = () => {
  const tawaran = useSelector((state) => state.tawaran.tawaran);
  const user = useSelector((state) => state.auth.user);
  const end = useSelector((state) => state.lelang.end);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = [];
    end.map((i) => {
      const arr2 = [];
      tawaran.map((x) => {
        if (x.id_lelang == i.id_lelang) {
          arr2.push({ lelang: i, tawaran: x });
        }
      });
      arr.push(arr2[0]);
    });
    const arr3 = [];
    arr.map((i) => {
      if (i.tawaran.id_peserta == user.id_peserta) {
        arr3.push(i);
      }
    });
    setItems(arr3);
  }, [tawaran, user, end]);
  return (
    <SafeAreaView>
      <ScrollView>
        <Block padding={10}>
          {items.map((item, i) => (
            <WinList key={i} item={item} />
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

export default WinScreen;
