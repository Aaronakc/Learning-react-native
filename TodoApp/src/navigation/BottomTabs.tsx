import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootStack from './RootStack';
import HistroyScreen from '../screens/HistroyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, StyleSheet } from 'react-native';
import { BottomTabParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({focused,color,size}) => {
          let iconName = '';

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'History') {
        iconName = focused ? 'time' : 'time-outline'; 
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      }

      return <Ionicons name={iconName} size={24} color={color} />;
   
        },
    
        tabBarStyle: {backgroundColor:"#b56d69ff"},
        tabBarActiveTintColor: "white",
        tabBarHideOnKeyboard: true,
        // tabBarActiveBackgroundColor:"#cb736e"
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="History" component={HistroyScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}  />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  }

})


export default BottomTabs

