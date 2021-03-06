import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {white} from './src/styles/colors';
import AuthStack from './src/navigation/authStack';
import DashboardStack from './src/navigation/dashboard';
import NetworkError from './src/components/networkError';
import Loader from './src/components/loader';
const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={white} barStyle='dark-content' />
      <NetworkError />
      <Loader/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Dashboard" component={DashboardStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
