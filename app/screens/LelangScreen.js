import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Block, Text, Button } from 'galio-framework';
import FormTawar from '../components/FormTawar';

import COLORS from '../constans/colors';
import { baseApiUrl } from '../../config';

const LelangScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [win, setWin] = useState({});
  const tawaran = useSelector((state) => state.tawaran.tawaran);

  useEffect(() => {
    let x = tawaran.filter((i) => i.id_lelang === item.id_lelang);
    x = x.sort((a, b) => a - b).reverse();
    if (x) {
      setWin(x[0]);
    }
  }, [item, tawaran]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Block style={styles.topBar}>
          <TouchableHighlight
            style={styles.backBtn}
            onPressIn={() => navigation.goBack()}
            underlayColor={COLORS.BRIGHT_DANGER}>
            <Icon name="arrow-left-circle" size={25} color={COLORS.DANGER} />
          </TouchableHighlight>
        </Block>
        <Image
          source={{ uri: baseApiUrl + '/assets/img/' + item.gambar }}
          style={styles.hero}
        />
        <Block flex padding={10}>
          <Text
            size={12}
            color={COLORS.BLACK}
            style={{ fontFamily: 'Roboto-Light' }}>
            Akan berakhir pada {item.waktu_selesai}
          </Text>
          <Text h5 color={COLORS.LIGHT_BLACK} style={{ fontFamily: 'Roboto' }}>
            {item.nama_ikan_hias}
          </Text>
          <Text
            size={16}
            color={COLORS.LIGHT_BLACK}
            style={{ fontFamily: 'Roboto' }}>
            IDR {item.harga_buka}{' '}
            <Icon name="arrow-right" size={16} color={COLORS.PRIMARY} /> IDR{' '}
            {win.harga_tawar}
          </Text>
          <Block paddingVertical={10}>
            <Text color={COLORS.LIGHT_BLACK} style={{ fontFamily: 'Roboto' }}>
              {item.deskripsi}
            </Text>
          </Block>
          <FormTawar item={item} />
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hero: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
    resizeMode: 'contain',
  },
  topBar: {
    position: 'absolute',
    zIndex: 5,
    padding: 10,
  },
  backBtn: {
    padding: 10,
    width: 45,
    height: 45,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 50,
  },
});

export default LelangScreen;
