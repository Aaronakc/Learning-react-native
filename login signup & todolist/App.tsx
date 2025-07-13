import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './src/navigation/RootStack';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  TodoTask: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (

    <NavigationContainer>
      <RootStack />
    </NavigationContainer>



  );
}
