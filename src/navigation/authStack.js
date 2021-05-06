import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/getStarted/SplashScreen';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};
export default AuthStack;
