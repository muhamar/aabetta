import React, { Component, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import { Block, Text } from 'galio-framework';
import COLORS from '../constans/colors';
import { filterCome, filterWillCome } from '../store/actions/lelang';

const Tab = () => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  const willComeToggle = () => {
    dispatch(filterWillCome());
    setToggle(false);
  };
  const comeToggle = () => {
    dispatch(filterCome());
    setToggle(true);
  };

  return (
    <Block row>
      <Block flex={0.5}>
        <TouchableHighlight
          underlayColor={COLORS.BRIGHT_PRIMARY}
          onPressIn={comeToggle}
          style={[styles.tab, toggle ? styles.tabActive : null]}>
          <Text style={[styles.tabText, toggle ? styles.tabTextActive : null]}>
            BERLANGSUNG
          </Text>
        </TouchableHighlight>
      </Block>
      <Block flex={0.5}>
        <TouchableHighlight
          underlayColor={COLORS.BRIGHT_PRIMARY}
          onPressIn={willComeToggle}
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
      <Block style={styles.headerWrap}>
        {/* <Block style={styles.formWrap}>
          <TextInput
            style={styles.formInput}
            placeholder="Apa yang anda cari?"
          />
        </Block> */}
        <Tab />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  headerWrap: {
    padding: 10,
    backgroundColor: COLORS.WHITE,
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
