import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/profile/Profile';
import Account from '../screens/profile/Account';
import Favourites from '../screens/favourite/Favourites';
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
