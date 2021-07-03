import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyOrders from '../screens/profile/MyOrders';
import OrderDetails from '../screens/profile/OrderDetails';
const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};
export default OrderStack;
