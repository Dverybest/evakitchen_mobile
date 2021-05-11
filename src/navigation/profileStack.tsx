import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/profile/Profile';
import MyOrders from '../screens/profile/MyOrders';
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
