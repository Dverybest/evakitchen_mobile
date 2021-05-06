import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/getStarted/SplashScreen';
import SignUp from '../screens/signUp/SignUp';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthStack;
