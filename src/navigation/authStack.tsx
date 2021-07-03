import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/getStarted/SplashScreen';
import SignUp from '../screens/signUp/SignUp';
import SignIn from '../screens/signIn/SignIn';
import {AuthContext} from '../context/authContext';
import {useNavigation} from '@react-navigation/core';
import ForgetPassword from '../screens/passwordReset/ForgetPassword';
const Stack = createStackNavigator();

const AuthStack = () => {
  const {reset} = useNavigation();
  const {authState} = React.useContext(AuthContext);
  React.useEffect(() => {
    if (authState.isAuthenticated) {
      reset({index: 0, routes: [{name: 'Dashboard'}]});
    }
  }, [authState.isAuthenticated]);
  if (authState.isAuthenticated) return <SplashScreen />;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};
export default AuthStack;
