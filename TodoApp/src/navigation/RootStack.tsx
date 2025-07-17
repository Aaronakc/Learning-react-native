import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import AddDetailsPage from '../screens/AddDetailsPage';
import DetailScreen from '../screens/DetailScreen';
import CompletedTask from '../screens/CompletedTask';
import RemainingTaskPage from '../screens/RemainingTaskPage';
import BottomTabs from './BottomTabs';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const navigation = useNavigation()
  return (

    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation:"none",

      }}
    >
      <Stack.Screen name="HomeScreen" component={BottomTabs} options={{animation:'none'}} />
      <Stack.Screen name="AddTaskScreen" component={AddDetailsPage}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="close" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          )

        }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: true,animation:"none" }} />
      <Stack.Screen name="CompletedTaskScreen" component={CompletedTask} options={{ presentation: "modal", animation: 'slide_from_left', headerShown: true }} />
      <Stack.Screen name="RemainingTaskScreen" component={RemainingTaskPage} options={{ presentation: "modal", animation: 'slide_from_right', headerShown: true }} />

    </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  icon: {
  
    marginRight: 10,
    flexDirection:"row",
    alignItems:"center",
  }
})

export default RootStack