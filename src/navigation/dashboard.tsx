import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {grey, orange} from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ProfileStack from './profileStack';
import HomeStack from './homeStack';
import {AuthContext} from '../context/authContext';
import {useNavigation} from '@react-navigation/core';
import {CartContext} from '../context/cartContext';
import CartStack from './cartStack';
import OrderStack from './orderStack';

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  const {reset} = useNavigation();
  const {authState} = useContext(AuthContext);
  const {cartState} = useContext(CartContext);
  useEffect(() => {
    if (!authState.isAuthenticated) {
      reset({index: 0, routes: [{name: 'Auth'}]});
    }
  }, [authState.isAuthenticated]);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size = 24}) => {
          if (route.name === 'Home') {
            return <AntDesign name={'home'} size={size} color={color} />;
          } else if (route.name === 'Orders') {
            return <Feather name={'check-circle'} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            return <Ionicons name={'cart-outline'} size={size} color={color} />;
          } else {
            return (
              <Ionicons name={'md-person-outline'} size={size} color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: orange,
        inactiveTintColor: grey,
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={
          cartState.items?.length ? {tabBarBadge: cartState.items.length} : {}
        }
      />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default DashboardStack;
