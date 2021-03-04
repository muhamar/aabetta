import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, TextInput } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import COLORS from '../constans/colors';
import { pushTawaran } from '../store/actions/tawaran';

const FormTawar = ({ item }) => {
  const dispatch = useDispatch();
  const [tawaran, setTawaran] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const tawarHandle = async () => {
    setLoading(true);
    setError('');
    try {
      await dispatch(pushTawaran(item.id_lelang, Number(tawaran)));
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <Block paddingVertical={10} marginTop={10}>
      <Block style={styles.card}>
        <Text center style={styles.title}>
          BUAT TAWARAN
        </Text>
        {error ? (
          <Block style={styles.errorWrap}>
            <Text style={styles.errorText}>{error}</Text>
          </Block>
        ) : null}
        <Block padding={10} marginTop={10}>
          <TextInput
            style={styles.input}
            placeholder="HARGA TAWAR"
            keyboardType="numeric"
            value={tawaran}
            onChangeText={(val) => setTawaran(val)}
          />
        </Block>
        <Block middle>
          <Button disabled={loading} loading={loading} onPress={tawarHandle}>
            <Text
              color={COLORS.WHITE}
              style={{ fontFamily: 'Roboto', letterSpacing: 2 }}>
              TAWAR
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
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
  input: {
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 4,
    letterSpacing: 3,
    backgroundColor: COLORS.BRIGHT_GREY,
  },
  errorWrap: {
    padding: 10,
    backgroundColor: COLORS.DANGER,
    borderRadius: 4,
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 0,
  },
  errorText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: COLORS.WHITE,
  },
});

export default FormTawar;
