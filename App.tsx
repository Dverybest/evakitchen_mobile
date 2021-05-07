import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from './src/screens/getStarted/SplashScreen';
import {orange, white} from './src/styles/colors';
import AuthStack from './src/navigation/authStack';
import DashboardStack from './src/navigation/dashboard';
const Stack = createStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        backgroundColor={orange}
        barStyle={'light-content' }
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Dashboard" component={DashboardStack} />
          <Stack.Screen name="Auth" component={AuthStack} />
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
