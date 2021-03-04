import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Block, Text, Button } from 'galio-framework';

import FormProfile from '../components/FormProfile';
import COLORS from '../constans/colors';
import { logout } from '../store/actions/auth';

const ProfileScreen = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Block middle style={styles.header}>
          <Text h4 style={styles.title}>
            PROFILE
          </Text>
          <Text h6 style={styles.name}>
            {user.nama}
          </Text>
          <Text size={16} style={styles.username}>
            @{user.username}
          </Text>
          <Block middle padding={15}>
            <Button color="white">
              <Text style={styles.btnText} onPress={handleLogout}>
                KELUAR
              </Text>
            </Button>
          </Block>
        </Block>
        <Block paddingHorizontal={10} marginTop={-75}>
          <FormProfile />
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
  name: {
    fontFamily: 'Roboto-light',
    color: COLORS.WHITE,
    letterSpacing: 3,
  },
  username: {
    fontFamily: 'Roboto-light',
    color: COLORS.SECONDARY,
    letterSpacing: 3,
  },
  btnText: {
    color: COLORS.DANGER,
    fontFamily: 'Roboto-light',
    letterSpacing: 3,
  },
});

export default ProfileScreen;
