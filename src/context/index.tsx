import React from 'react';
import {IAuthState} from '../interfaces/authContext';
import {ICartState} from '../interfaces/cartContext';
import {IContextProvider} from '../interfaces/common';
import {IHomeScreenState} from '../interfaces/homeScreenContext';
import SplashScreen from '../screens/getStarted/SplashScreen';
import AppContextProvider from './appContext';
import AuthContextProvider from './authContext';
import CartContextProvider from './cartContext';
import HomeScreenContextProvider from './homeScreenContext';
import {fetchFromStorage, StorageNames} from './storage';

const Provider = ({children}: IContextProvider) => {
  const [loading, setLoading] = React.useState(true);
  const [
    initialAuthValue,
    setInitialAuthValue,
  ] = React.useState<IAuthState | null>(null);
  const [initialCartValue, setinitialCartValue] = React.useState<ICartState>({
    items: [],
  });
  const [
    initialHomeValue,
    setInitialHomeValue,
  ] = React.useState<IHomeScreenState>({popular: [], special: []});

  React.useEffect(() => {
    Promise.all([
      fetchFromStorage(StorageNames.AUTH),
      fetchFromStorage(StorageNames.CART),
      fetchFromStorage(StorageNames.FOOD),
    ])
      .then(result => {
        setInitialAuthValue(result[0] ?? {});
        setinitialCartValue(result[1] ?? {items: []});
        if (result[2]) {
          setInitialHomeValue(result[2]);
        }
      })
      .catch()
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <AppContextProvider>
      <AuthContextProvider value={initialAuthValue}>
        <CartContextProvider value={initialCartValue}>
          <HomeScreenContextProvider value={initialHomeValue}>
            {children}
          </HomeScreenContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </AppContextProvider>
  );
};

export default Provider;
