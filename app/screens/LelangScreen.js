import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Block, Text } from 'galio-framework';
import FormTawar from '../components/FormTawar';

import COLORS from '../constans/colors';
import { baseApiUrl } from '../../config';
import { fetchLelang } from '../store/actions/lelang';

const LelangScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [win, setWin] = useState({});
  const [listTawaran, setListTawaran] = useState([]);
  const tawaran = useSelector((state) => state.tawaran.tawaran);

  useEffect(() => {
    let x = tawaran.filter((i) => i.id_lelang === item.id_lelang);
    x = x.sort((a, b) => a.harga_tawar - b.harga_tawar).reverse();
    if (x) {
      setListTawaran(x);
      setWin(x[0]);
    }
  }, [item, tawaran]);

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const fn = async () => {
      try {
        await dispatch(fetchLelang());
      } catch (e) {
        console.log(e.message);
      }
      setRefreshing(false);
    };
    fn();
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Block style={styles.topBar}>
          <TouchableHighlight
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
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
            {win ? (
              <Icon name="arrow-right" size={16} color={COLORS.PRIMARY} />
            ) : null}
            {win ? 'IDR ' + win.harga_tawar : null}
          </Text>
          <Block paddingVertical={10}>
            <Text color={COLORS.LIGHT_BLACK} style={{ fontFamily: 'Roboto' }}>
              {item.deskripsi}
            </Text>
          </Block>
          <FormTawar item={item} />
          <Block paddingVertical={10} marginTop={20} style={styles.card}>
            <Block paddingVertical={10}>
              <Text style={styles.title} center>
                TAWRAN TERTINGGI
              </Text>
            </Block>
            {listTawaran.map((x, i) => {
              return (
                <Block
                  key={i}
                  padding={10}
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.GREY,
                  }}>
                  <Text color="#000" size={14}>
                    {++i}. ID-{x.id_peserta} menawar dengan harga{' '}
                    <Text bold color={COLORS.DARK_PRIMARY}>
                      IDR {x.harga_tawar}
                    </Text>
                  </Text>
                </Block>
              );
            })}
          </Block>
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
  card: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.PRIMARY,
    borderBottomWidth: 4,
    borderRadius: 4,
  },
  title: {
    marginTop: 10,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 3,
    fontSize: 20,
    color: COLORS.LIGHT_BLACK,
  },
});

export default LelangScreen;
