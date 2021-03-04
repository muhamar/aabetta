import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Block, Text } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../constans/colors';

const NavBar = ({ title, backToggle, bgColor }) => {
  const navigation = useNavigation();
  return (
    <Block row backgroundColor={bgColor ? bgColor : COLORS.WHITE}>
      <Block height={50} flex={0.1} middle>
        {navigation.canGoBack() && backToggle ? (
          <TouchableHighlight
            onPress={() => navigation.goBack()}
            underlayColor={COLORS.TRANSPARENT}>
            <Icon
              name="arrow-left-circle"
              size={25}
              color={COLORS.DARK_BLACK}
            />
          </TouchableHighlight>
        ) : null}
      </Block>
      <Block height={50} flex={0.8} middle>
        <Text size={18} style={styles.title}>
          {title || 'Navbar'}
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: COLORS.DARK_SECONDARY,
  },
});

export default NavBar;
