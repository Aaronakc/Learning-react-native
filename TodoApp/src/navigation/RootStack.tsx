import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import AddDetailsPage from '../screens/AddDetailsPage';
import DetailScreen from '../screens/DetailScreen';
import CompletedTask from '../screens/CompletedTask';
import RemainingTaskPage from '../screens/RemainingTaskPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (

    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
        animation: 'none'  ,
    
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddDetailsPage} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="CompletedTaskScreen" component={CompletedTask} />
      <Stack.Screen name="RemainingTaskScreen" component={RemainingTaskPage} />
  
     
    
    </Stack.Navigator>

  )
}

export default RootStack