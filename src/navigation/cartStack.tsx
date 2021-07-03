import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/cart/Cart';
import DeliveryDetails from '../screens/cart/DeliveryDetails';
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Cart} />
      <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
    </Stack.Navigator>
  );
};
export default CartStack;
