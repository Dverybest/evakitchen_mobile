import React from 'react';
import {IContextProvider} from '../interfaces/common';
import SplashScreen from '../screens/getStarted/SplashScreen';
import AppContextProvider from './appContext';
import AuthContextProvider from './authContext';
import CartContextProvider from './cartContext';
import {fetchFromStorage, StorageNames} from './storage';

const Provider = ({children}: IContextProvider) => {
  const [loading, setLoding] = React.useState(true);
  const [initialValue, setInitialValue] = React.useState(null);
  React.useEffect(() => {
    fetchFromStorage(StorageNames.AUTH)
      .then(value => setInitialValue(value))
      .catch()
      .finally(() => setLoding(false));
  }, []);
  if (loading) {
    return <SplashScreen />;
  }
  return (
    <AppContextProvider>
      <AuthContextProvider value={initialValue}>
        <CartContextProvider>{children}</CartContextProvider>
      </AuthContextProvider>
    </AppContextProvider>
  );
};

export default Provider;
