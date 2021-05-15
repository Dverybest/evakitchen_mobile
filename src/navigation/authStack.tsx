import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/getStarted/SplashScreen';
import SignUp from '../screens/signUp/SignUp';
import SignIn from '../screens/signIn/SignIn';
const Stack = createStackNavigator();

const AuthStack = () => {
  /**
   * TODO 1:
   *  add useEffect 
   *  inside it check if authcontext is auth context isAuthenticated
   *  if true navigate to Dashboard  using  navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] })
   * 
   */
 /**
   * TODO 2:
   * check f authcontext is auth context isAuthenticated
   *  if true return the <SplashScreen/>
   * 
   */

  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};
export default AuthStack;
