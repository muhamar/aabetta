import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Dimensions,
} from 'react-native';
import { Block, Text, Button } from 'galio-framework';
import { useDispatch } from 'react-redux';
import { login, register } from '../store/actions/auth';
import COLORS from '../constans/colors';

const AuthScreen = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Block flex style={styles.cardWrapper}>
          <Block style={styles.header}>
            <Text h2 style={styles.brand}>
              AABETTA
            </Text>
          </Block>
          <Block style={styles.card}>
            <Block row>
              <Block flex={0.5}>
                <TouchableHighlight
                  underlayColor={COLORS.LIGHT_PRIMARY}
                  onPressIn={() => setToggle(false)}
                  style={[
                    styles.tabItem,
                    !toggle ? styles.tabItemActive : null,
                  ]}>
                  <Text
                    style={[
                      styles.tabItemText,
                      !toggle ? styles.tabItemTextActive : null,
                    ]}>
                    MASUK
                  </Text>
                </TouchableHighlight>
              </Block>
              <Block flex={0.5}>
                <TouchableHighlight
                  underlayColor={COLORS.LIGHT_PRIMARY}
                  onPressIn={() => setToggle(true)}
                  style={[
                    styles.tabItem,
                    toggle ? styles.tabItemActive : null,
                  ]}>
                  <Text
                    style={[
                      styles.tabItemText,
                      toggle ? styles.tabItemTextActive : null,
                    ]}>
                    DAFTAR
                  </Text>
                </TouchableHighlight>
              </Block>
            </Block>
            <Block flex>
              <Block>
                <Text h5 center style={styles.title}>
                  {!toggle ? 'MASUK' : 'DAFTAR'}
                </Text>
              </Block>
              {!toggle ? <LoginForm /> : <RegisterForm />}
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const loginHandle = async () => {
    setLoading(true);
    setError('');
    try {
      await dispatch(login(formInput.username, formInput.password));
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      {error ? (
        <Block style={styles.errorWrap}>
          <Text style={styles.errorText}>{error}</Text>
        </Block>
      ) : null}
      <Block style={styles.formWrap}>
        <TextInput
          style={styles.formInput}
          placeholder="Username"
          value={formInput.username}
          onChangeText={(username) => setFormInput({ ...formInput, username })}
        />
      </Block>
      <Block style={styles.formWrap}>
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          secureTextEntry
          value={formInput.password}
          onChangeText={(password) => setFormInput({ ...formInput, password })}
        />
      </Block>
      <Block style={styles.formWrap}>
        <Block middle style={{ marginTop: 10 }}>
          <Button
            style={styles.formBtn}
            disabled={loading}
            loading={loading}
            onPress={loginHandle}>
            <Text style={styles.formBtnTxt}>MASUK</Text>
          </Button>
        </Block>
      </Block>
    </>
  );
};

const RegisterForm = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const registerHandle = async () => {
    setLoading(true);
    setError('');
    try {
      await dispatch(
        register(formInput.name, formInput.username, formInput.password),
      );
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <>
      {error ? (
        <Block style={styles.errorWrap}>
          <Text style={styles.errorText}>{error}</Text>
        </Block>
      ) : null}
      <Block style={styles.formWrap}>
        <TextInput
          style={styles.formInput}
          placeholder="Nama"
          value={formInput.name}
          onChangeText={(name) => setFormInput({ ...formInput, name })}
        />
      </Block>
      <Block style={styles.formWrap}>
        <TextInput
          style={styles.formInput}
          placeholder="Username"
          value={formInput.username}
          onChangeText={(username) => setFormInput({ ...formInput, username })}
        />
      </Block>
      <Block style={styles.formWrap}>
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          secureTextEntry
          value={formInput.password}
          onChangeText={(password) => setFormInput({ ...formInput, password })}
        />
      </Block>
      <Block style={styles.formWrap}>
        <Block middle style={{ marginTop: 10 }}>
          <Button
            style={styles.formBtn}
            disabled={loading}
            loading={loading}
            onPress={registerHandle}>
            <Text style={styles.formBtnTxt}>DAFTAR</Text>
          </Button>
        </Block>
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  header: {
    marginBottom: 20,
    marginTop: Dimensions.get('screen').height * 0.11,
  },
  brand: {
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    letterSpacing: 5,
    color: COLORS.PRIMARY,
  },
  cardWrapper: {
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: COLORS.BRIGHT_GREY,
    borderBottomWidth: 4,
    borderBottomColor: COLORS.PRIMARY,
    borderRadius: 4,
    paddingBottom: 20,
  },
  tabItem: {
    display: 'flex',
    backgroundColor: COLORS.LIGHT_GREY,
  },
  tabItemActive: {
    backgroundColor: COLORS.BRIGHT_GREY,
  },
  tabItemText: {
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
    color: COLORS.PRIMARY,
  },
  tabItemTextActive: {
    color: COLORS.DARK_SECONDARY,
  },
  title: {
    color: COLORS.DARK_SECONDARY,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 6,
    marginTop: 40,
    marginBottom: 20,
  },
  formWrap: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  formInput: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    borderWidth: 0,
    padding: 10,
    color: COLORS.DARK_BLACK,
  },
  formBtn: {
    margin: 0,
    borderRadius: 2,
  },
  formBtnTxt: {
    margin: 0,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 1,
    color: COLORS.WHITE,
  },
  errorWrap: {
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLORS.DANGER,
    margin: 20,
    padding: 10,
    borderRadius: 2,
  },
  errorText: {
    textAlign: 'center',
    color: COLORS.WHITE,
    fontFamily: 'Roboto',
  },
});

export default AuthScreen;
