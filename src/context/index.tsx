import React from 'react';
import { IAuthState } from '../interfaces/authContext';
import { ICartState } from '../interfaces/cartContext';
import {IContextProvider} from '../interfaces/common';
import SplashScreen from '../screens/getStarted/SplashScreen';
import AppContextProvider from './appContext';
import AuthContextProvider from './authContext';
import CartContextProvider from './cartContext';
import {fetchFromStorage, StorageNames} from './storage';

const Provider = ({children}: IContextProvider) => {
  const [loading, setLoading] = React.useState(true);
  const [initialAuthValue, setInitialAuthValue] = React.useState<IAuthState|null>(null);
  const [initialCartValue, setinitialCartValue] = React.useState<ICartState>({items: []});
  React.useEffect(() => {
    Promise.all([fetchFromStorage(StorageNames.AUTH),fetchFromStorage(StorageNames.CART)]).then(result=>{
      console.log({result});
      setInitialAuthValue(result[0])
      setinitialCartValue(result[1]??{items: []})
    })
    .catch()
  .finally(() => setLoading(false));
  }, []);
 
  if (loading) {
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
