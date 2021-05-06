import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from './src/screens/getStarted/SplashScreen';
import { white } from './src/styles/colors';
import AuthStack from './src/navigation/authStack';
const Stack = createStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={white} barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer fallback={<SplashScreen/>}>
          <Stack.Screen name="Auth" component={AuthStack}/>
      </NavigationContainer>
      <SplashScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex:1
  },
});

export default App;
