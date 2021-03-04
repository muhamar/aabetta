import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem('@api_token', value);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@api_token');
    return value || '';
  } catch (e) {
    // error reading value
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('@api_token');
  } catch (e) {
    // error reading value
  }
};
