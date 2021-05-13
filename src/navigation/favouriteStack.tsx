import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favourites from '../screens/favourite/Favourites';
const Stack = createStackNavigator();

const FavouriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Favourites} />
    </Stack.Navigator>
  );
};
export default FavouriteStack;
