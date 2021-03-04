import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';
import COLORS from '../constans/colors';
import NavBar from './NavBar';
import { filterCome, filterWillCome } from '../store/actions/lelang';

const Tab = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.lelang.toggle);
  const willComeToggle = () => {
    dispatch(filterWillCome());
  };
  const comeToggle = () => {
    dispatch(filterCome());
  };

  return (
    <Block row>
      <Block flex={0.5}>
        <TouchableHighlight
          underlayColor={COLORS.BRIGHT_PRIMARY}
          onPress={comeToggle}
          style={[styles.tab, toggle ? styles.tabActive : null]}>
          <Text style={[styles.tabText, toggle ? styles.tabTextActive : null]}>
            BERLANGSUNG
          </Text>
        </TouchableHighlight>
      </Block>
      <Block flex={0.5}>
        <TouchableHighlight
          underlayColor={COLORS.BRIGHT_PRIMARY}
          onPress={willComeToggle}
          style={[styles.tab, !toggle ? styles.tabActive : null]}>
          <Text style={[styles.tabText, !toggle ? styles.tabTextActive : null]}>
            AKAN DATANG
          </Text>
        </TouchableHighlight>
      </Block>
    </Block>
  );
};

class HomeHeader extends Component {
  render() {
    return (
      <>
        <NavBar title="HOME" />
        <Block style={styles.headerWrap}>
          {/* <Block style={styles.formWrap}>
          <TextInput
            style={styles.formInput}
            placeholder="Apa yang anda cari?"
          />
        </Block> */}
          <Tab />
        </Block>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerWrap: {
    padding: 10,
    backgroundColor: '#fafafa',
    paddingBottom: 0,
  },
  formInput: {
    backgroundColor: COLORS.BRIGHT_GREY,
    padding: 10,
  },
  tab: {
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.TRANSPARENT,
  },
  tabActive: {
    borderBottomColor: COLORS.PRIMARY,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Roboto',
    letterSpacing: 1,
  },
});

export default HomeHeader;
