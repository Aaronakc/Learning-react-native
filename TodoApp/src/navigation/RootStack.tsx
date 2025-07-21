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
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const navigation = useNavigation()
  return (

    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation: "none",

      }}
    >
      <Stack.Screen name="HomeScreen" component={DrawerNavigation} options={{
        animation: 'none',
      }} />

      <Stack.Screen name="AddTaskScreen" component={AddDetailsPage}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerTitleStyle: {
            fontFamily: "serif",
          },
          headerTitleAlign: "center",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="close" size={24} color="black" style={styles.icon} />
            </TouchableOpacity>
          )





        }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{
        headerShown: true, animation: "none",
        headerTitleStyle: {
          fontFamily: "serif",
        },
        headerTitleAlign: "center",
      }} />


    </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  icon: {

    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  }
})

export default RootStack