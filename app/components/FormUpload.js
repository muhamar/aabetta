import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button, Text } from 'galio-framework';
import { uploadImage } from '../services/transaction';
import DocumentPicker from 'react-native-document-picker';

const FormUpload = ({ item, updateTrack }) => {
  const [loading, setLoading] = useState(false);
  const upload = async () => {
    setLoading(true);
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const data = (
        await uploadImage({
          file: res,
          id_tawaran: item.tawaran.id_tawaran,
        })
      ).data;
      updateTrack();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <Block>
      <Button onPress={upload} loading={loading} disabled={loading}>
        <Text style={styles.btnText}>UPLOAD BUKTI</Text>
      </Button>
    </Block>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: '#FFF',
    fontFamily: 'Roboto',
  },
});

export default FormUpload;
