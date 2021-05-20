import React from 'react';
import {IContextProvider} from '../interfaces/common';
import SplashScreen from '../screens/getStarted/SplashScreen';
import AppContextProvider from './appContext';
import AuthContextProvider from './authContext';
import CartContextProvider from './cartContext';
import {fetchFromStorage, StorageNames} from './storage';

const Provider = ({children}: IContextProvider) => {
  const [authLoading, setAuthLoading] = React.useState(true);
  const [cartLoading, setCartLoading] = React.useState(true);
  const [initialAuthValue, setInitialAuthValue] = React.useState(null);
  const [initialCartValue, setinitialCartValue] = React.useState({items: []});
  React.useEffect(() => {
    fetchFromStorage(StorageNames.AUTH)
      .then(value => setInitialAuthValue(value))
      .catch()
      .finally(() => setAuthLoading(false));
  }, []);
  React.useEffect(() => {
    fetchFromStorage(StorageNames.CART)
      .then(value => setinitialCartValue(value))
      .catch()
      .finally(() => setCartLoading(false));
  }, []);
  if (authLoading && cartLoading) {
    return <SplashScreen />;
  }
  console.log(initialAuthValue,initialCartValue);
  
  return (
    <AppContextProvider>
      <AuthContextProvider value={initialAuthValue}>
        <CartContextProvider value={initialCartValue}>
          {children}
        </CartContextProvider>
      </AuthContextProvider>
    </AppContextProvider>
  );
};

export default Provider;
