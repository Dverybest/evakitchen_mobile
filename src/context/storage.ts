import AsyncStorage from '@react-native-community/async-storage';

export const saveToStorage = async (name: string, data: any) => {
  await AsyncStorage.setItem(name, JSON.stringify(data));
};

export const fetchFromStorage = async (name: string) => {
  const value = await AsyncStorage.getItem(name);
  if (value === null) return null;
  return JSON.parse(value);
};

export const clearStorage = async () => {
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(keys);
};

export enum StorageNames {
  AUTH = 'AUTH',
  CART = 'CART',
}
