import React, { useContext, useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {orange} from './src/styles/colors';
import AuthStack from './src/navigation/authStack';
import DashboardStack from './src/navigation/dashboard';
import { AppContext } from './src/context/appContext';
import NetworkError from './src/components/networkError';
import { ContextActionType } from './src/context/enums';
const Stack = createStackNavigator();
const App = () => {
  const {appState,dispatchAppState} = useContext(AppContext);
  console.log({appState});
  
  useEffect(()=>{
    console.log('meeee',{appState});
    dispatchAppState({type:ContextActionType.IS_SERVER_ERROR,payload:true})
  },[])
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={orange} barStyle={'light-content'} />
      <NetworkError />
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
