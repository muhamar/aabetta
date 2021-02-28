import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Text } from "galio-framework";

import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const RegisterScreen = ({ navigation }) => {
  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground source={Images.RegisterBackground} style={{ width, height, zIndex: 1 }}>
        <Block flex middle>
          <Block style={styles.registerContainer}>
            <Block flex>
              <Block flex={0.17} middle style={{ backgroundColor: '#fff', marginBottom: 20, paddingVertical: 30 }}>
                <Text color="#8898AA" size={32} bold>
                  BUAT AKUN
                </Text>
              </Block>
              <Block flex center>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                  <Block middle style={{ marginBottom: 15 }}>
                    <Input borderless placeholder="Name" iconContent={false} />
                  </Block>
                  <Block middle style={{ marginBottom: 15 }}>
                    <Input borderless placeholder="Username" iconContent={false} />
                  </Block>
                  <Block middle>
                    <Input password borderless placeholder="Password" iconContent={false} />
                  </Block>
                  <Block middle>
                    <Button color="primary" style={styles.mainButton}>
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        BUAT AKUN
                      </Text>
                    </Button>
                  </Block>
                </KeyboardAvoidingView>
              </Block>
              <Block flex={0.17} middle style={{ backgroundColor: '#fff', paddingBottom: 20 }}>
                <Button color="default" style={styles.secondButton}>
                  <Text bold size={14} color={argonTheme.COLORS.WHITE} onPress={() => navigation.navigate('Login')}>
                    LOGIN
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  mainButton: {
    width: width * 0.8,
    marginHorizontal: 0,
    marginTop: 25
  },
  secondButton: {
    width: width * 0.8,
    marginHorizontal: 0,
    marginTop: 25
  }
});

export default RegisterScreen;
