import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { Block, Text } from 'galio-framework';

import LoadingScreen from './LoadingScreen';
import FormUpload from '../components/FormUpload';
import COLORS from '../constans/colors';
import { baseApiUrl } from '../../config';
import { trackTransaction } from '../services/transaction';

const RenderCard = ({ item, track, updateTrack }) => {
  if (track.pesanan && track.pengiriman) {
    return (
      <Block middle>
        <Text>NO RESI = {track.pengiriman.nomor_resi}</Text>
      </Block>
    );
  }

  if (track.pesanan) {
    return (
      <Block middle>
        <Block paddingBottom={10}>
          <Text size={15} center>
            AKAN SEGERA DI VERIFIKASI
          </Text>
        </Block>
        <Image
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('screen').width * 0.7,
            height: Dimensions.get('screen').width * 0.7,
          }}
          source={{
            uri: baseApiUrl + '/assets/upload/' + track.pesanan.bukti_gambar,
          }}
        />
      </Block>
    );
  }

  return <FormUpload updateTrack={updateTrack} item={item} />;
};

const TransactionScreen = ({ route }) => {
  const { item } = route.params;
  const [loading, setLoading] = useState(true);
  const [track, setTrack] = useState({});

  const updateTrack = useCallback(() => {
    const run = async () => {
      setLoading(true);
      try {
        const res = await trackTransaction({
          id_tawaran: item.tawaran.id_tawaran,
        });
        setTrack(res.data.data);
      } catch (e) {
        console.log(e.response.data);
      }
      setLoading(false);
    };
    run();
  }, [item]);

  useEffect(() => {
    updateTrack();
  }, [updateTrack]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.hero}
          source={{
            uri: baseApiUrl + '/assets/img/' + item.lelang.gambar,
          }}
        />
        <Block middle style={styles.card}>
          <Text style={styles.title}>
            Status Pembayaran -{' '}
            {track.pesanan ? track.pesanan.status_pembayaran : 'Pending'}
          </Text>
          <Text h4 style={styles.title}>
            {item.lelang.nama_ikan_hias}
          </Text>
          <Text style={styles.title}>IDR {item.tawaran.harga_tawar}</Text>
          <Block middle padding={20}>
            <RenderCard item={item} track={track} updateTrack={updateTrack} />
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hero: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: COLORS.LIGHT_BLACK,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    paddingTop: 20,
    margin: 10,
    borderBottomColor: COLORS.PRIMARY,
    borderBottomWidth: 4,
    borderRadius: 4,
  },
});

export default TransactionScreen;
