import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import FoodDetails from '../screens/home/FoodDetails';
import CategoryDetails from '../screens/home/components/CategoryDetails';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FoodDetails" component={FoodDetails} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
    </Stack.Navigator>
  );
};
export default HomeStack;
