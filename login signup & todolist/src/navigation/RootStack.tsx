import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../types/navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TodoTaskScreen from '../screens/TodoTaskScreen';
import CompletedTask from '../screens/CompletedTask';
import RemainingTask from '../screens/RemainingTask';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (

    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, // no headers
        animation: 'none'   
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="TodoTask" component={TodoTaskScreen} />
      <Stack.Screen name="CompletedTask" component={CompletedTask} />
      <Stack.Screen name="RemainingTask" component={RemainingTask} />
    </Stack.Navigator>

  )
}

export default RootStack