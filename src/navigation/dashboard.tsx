import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {grey, orange} from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileStack from './profileStack';
import FavouriteStack from './favouriteStack';
import HomeStack from './homeStack';
import Cart from '../screens/cart/Cart';
import {AuthContext} from '../context/authContext';
import {useNavigation} from '@react-navigation/core';
import {CartContext} from '../context/cartContext';

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
            return <Ionicons name={'home'} size={size} color={color} />;
          } else if (route.name === 'Favourite') {
            return <AntDesign name={'hearto'} size={size} color={color} />;
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
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favourite" component={FavouriteStack} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={
          cartState.items?.length ? {tabBarBadge: cartState.items.length} : {}
        }
      />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default DashboardStack;
