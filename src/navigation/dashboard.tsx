import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {grey, orange} from '../styles/colors';
import HomeScreen from '../screens/home/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileStack from './profileStack';

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size = 24}) => {
          if (route.name === 'Home') {
            return <Ionicons name={'home'} size={size} color={color} />;
          } else if (route.name === 'Favourite') {
            return <AntDesign name={'hearto'} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            return <Ionicons name={'cart-outline'} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return (
              <Ionicons name={'md-person-outline'} size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: orange,
        inactiveTintColor: grey,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={HomeScreen} />
      <Tab.Screen name="Cart" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default DashboardStack;
