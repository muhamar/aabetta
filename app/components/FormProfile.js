import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, TextInput } from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import COLORS from '../constans/colors';
import { updateProfile } from '../store/actions/auth';

const FormProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [formInput, setFormInput] = useState({
    nama: '',
    nohp: '',
    alamat: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setFormInput({
      nama: user.nama,
      nohp: user.nohp,
      alamat: user.alamat,
    });
  }, [user]);

  const updateHandle = async () => {
    setLoading(true);
    setError('');
    try {
      await dispatch(
        updateProfile(formInput.nama, formInput.nohp, formInput.alamat),
      );
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <Block paddingVertical={10}>
      <Block style={styles.card}>
        <Text center style={styles.title}>
          EDIT PROFILE
        </Text>
        {error ? (
          <Block style={styles.errorWrap}>
            <Text style={styles.errorText}>{error}</Text>
          </Block>
        ) : null}
        <Block padding={10} marginTop={10}>
          <Text style={styles.label}>Nama</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            value={formInput.nama}
            onChangeText={(nama) => setFormInput({ ...formInput, nama })}
          />
        </Block>
        <Block padding={10}>
          <Text style={styles.label}>No Hp</Text>
          <TextInput
            style={styles.input}
            placeholder="No Hp"
            value={formInput.nohp}
            onChangeText={(nohp) => setFormInput({ ...formInput, nohp })}
          />
        </Block>
        <Block padding={10}>
          <Text style={styles.label}>Alamat</Text>
          <TextInput
            style={styles.input}
            placeholder="Alamat"
            value={formInput.alamat}
            onChangeText={(alamat) => setFormInput({ ...formInput, alamat })}
          />
        </Block>
        <Block middle>
          <Button disabled={loading} loading={loading} onPress={updateHandle}>
            <Text
              color={COLORS.WHITE}
              style={{ fontFamily: 'Roboto', letterSpacing: 2 }}>
              SIMPAN
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
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 3,
    fontSize: 24,
    color: COLORS.LIGHT_BLACK,
  },
  label: {
    fontFamily: 'Roboto',
    color: COLORS.SECONDARY,
    letterSpacing: 2,
  },
  input: {
    fontSize: 14,
    borderRadius: 4,
    padding: 10,
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

export default FormProfile;
