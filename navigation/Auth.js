import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'

const Stack = createStackNavigator()

const AuthNavigation = () => {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigation
