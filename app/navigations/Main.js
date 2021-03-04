import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import LelangScreen from '../screens/LelangScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import WinScreen from '../screens/WinScreen';
import TransactionScreen from '../screens/TransactionScreen';
import AboutScreen from '../screens/AboutScreen';

import HomeHeader from '../components/HomeHeader';
import NavBar from '../components/NavBar';

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <HomeHeader navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#eee' },
        }}
      />
      <Stack.Screen
        name="Lelang"
        headerMode="none"
        options={{
          header: () => {},
        }}
        component={LelangScreen}
      />
    </Stack.Navigator>
  );
};

const HistoryStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          header: ({ navigation, scene }) => (
            <NavBar
              navigation={navigation}
              scene={scene}
              backToggle={false}
              title="History"
            />
          ),
          cardStyle: { backgroundColor: '#eee' },
        }}
      />
    </Stack.Navigator>
  );
};

const WinStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Win"
        component={WinScreen}
        options={{
          header: ({ navigation, scene }) => (
            <NavBar
              navigation={navigation}
              scene={scene}
              backToggle={false}
              title="Menang"
            />
          ),
          cardStyle: { backgroundColor: '#eee' },
        }}
      />
      <Stack.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          header: ({ navigation, scene }) => (
            <NavBar
              navigation={navigation}
              scene={scene}
              backToggle={true}
              title="TRANSAKSI"
            />
          ),
          cardStyle: { backgroundColor: '#eee' },
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <NavBar
              navigation={navigation}
              scene={scene}
              backToggle={false}
              title="Profile"
            />
          ),
          cardStyle: { backgroundColor: '#eee' },
        }}
      />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          header: ({ navigation, scene }) => (
            <NavBar
              navigation={navigation}
              scene={scene}
              backToggle={false}
              title="About"
            />
          ),
          cardStyle: { backgroundColor: '#eee' },
        }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon = 'home';
          switch (route.name) {
            case 'Home':
              icon = 'home';
              break;
            case 'History':
              icon = 'layers';
              break;
            case 'Profile':
              icon = 'user';
              break;
            case 'About':
              icon = 'compass';
              break;
            case 'Menang':
              icon = 'award';
              break;
          }
          return <Icon name={icon} size={size * 0.8} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="History" component={HistoryStack} />
      <Tab.Screen name="Menang" component={WinStack} />
      <Tab.Screen name="About" component={AboutStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default Main;
