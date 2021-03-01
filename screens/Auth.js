import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Block, Text } from "galio-framework";

import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";
import Theme from "../constants/Theme";
import { useDispatch } from "react-redux";
import { login, register } from "../store/actions/auth";

const { width, height } = Dimensions.get("screen");


const Register = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const registerHandle = async () => {
    setLoading(true)
    setError('')

    try {
      await dispatch(register(formInput.name, formInput.username, formInput.password))
      setError('')
    } catch(e) {
      setError(e.message)
    }

    setLoading(false)
  }

  return (
    <Block flex center>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <Block middle>
          {error ? 
          <Block style={styles.alert}>
            <Text color={Theme.COLORS.SECONDARY} size={12} center>{error}</Text>
          </Block>
          : null}
        </Block>
        <Block middle>
          <Input
            borderless
            placeholder="Nama"
            iconContent={false} 
            value={formInput.name}
            onChangeText={(name) => setFormInput({...formInput, name})}
          />
        </Block>
        <Block middle>
          <Input
            borderless
            placeholder="Username"
            iconContent={false} 
            value={formInput.username}
            onChangeText={(username) => setFormInput({...formInput, username})}
          />
        </Block>
        <Block middle>
          <Input
            borderless
            password
            placeholder="Password"
            iconContent={false} 
            value={formInput.password}
            onChangeText={(password) => setFormInput({...formInput, password})}
          />
        </Block>
        <Block middle>
          <Button color="primary" style={styles.mainButton} disabled={loading} loading={loading} onPress={registerHandle}>
            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
              DAFTAR
            </Text>
          </Button>
        </Block>
      </KeyboardAvoidingView>
    </Block>
  )
}

const Login = () => {
  const [formInput, setFormInput] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const loginHandle = async () => {
    setLoading(true)
    setError('')

    try {
      await dispatch(login(formInput.username, formInput.password))
      setError('')
    } catch(e) {
      setError(e.message)
    }

    setLoading(false)
  }

  return (
    <Block flex center>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <Block middle>
          {error ? 
          <Block style={styles.alert}>
            <Text color={Theme.COLORS.SECONDARY} size={12} center>{error}</Text>
          </Block>
          : null}
        </Block>
        <Block middle>
          <Input
            borderless
            placeholder="Username"
            iconContent={false} 
            value={formInput.username}
            onChangeText={(username) => setFormInput({...formInput, username})}
          />
        </Block>
        <Block middle>
          <Input
            borderless
            password
            placeholder="Password"
            iconContent={false} 
            value={formInput.password}
            onChangeText={(password) => setFormInput({...formInput, password})}
          />
        </Block>
        <Block middle>
          <Button color="primary" style={styles.mainButton} disabled={loading} loading={loading} onPress={loginHandle}>
            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
              MASUK
            </Text>
          </Button>
        </Block>
      </KeyboardAvoidingView>
    </Block>
  )
}


const AuthScreen = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground source={Images.RegisterBackground} style={{ width, height, zIndex: 1 }}>
        <Block flex middle>
          <Block style={styles.registerContainer}>
            <Block row>
              <Block flex>
                <TouchableOpacity
                  style={[styles.tabNavBtn, toggle ? {backgroundColor: '#fff'} : {}]}
                  onPress={() => setToggle(false)}
                >
                  <Text bold color={!toggle ? Theme.COLORS.PRIMARY : Theme.COLORS.DEFAULT}>MASUK</Text>
                </TouchableOpacity>
              </Block>
              <Block flex>
                <TouchableOpacity
                  style={[styles.tabNavBtn, !toggle ? {backgroundColor: '#fff'} : {}]}
                  onPress={() => setToggle(true)}
                >
                  <Text bold color={toggle ? Theme.COLORS.PRIMARY : Theme.COLORS.DEFAULT}>DAFTAR</Text>
                </TouchableOpacity>
              </Block>
            </Block>
            <Block>
              <Text style={styles.title}>{toggle ? 'DAFTAR' : 'MASUK'}</Text>
            </Block>
            {toggle ? <Register /> : <Login />}
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.55,
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
  tabNavBtn: {
    alignItems: "center",
    paddingVertical: 20
  },
  title: {
    textAlign: 'center',
    paddingVertical: 30,
    letterSpacing: 2,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8898AA'
  },
  mainButton: {
    width: width * 0.8,
    marginHorizontal: 0,
    marginTop: 15
  },
  alert: {
    padding: 15,
    marginBottom: 5,
    width: width * 0.8,
    borderRadius: 4,
    backgroundColor: Theme.COLORS.ERROR
  }
});

export default AuthScreen;
