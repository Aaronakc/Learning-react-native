import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootStack from './RootStack';
import HistroyScreen from '../screens/HistroyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, StyleSheet } from 'react-native';
import { BottomTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') return <Image source={require('../../assets/homeIcon2.png')} style={styles.icon} />;
          if (route.name === 'History') return <Image source={require('../../assets/historyIcon5.png')} style={styles.icon} />;
          return <Image source={require('../../assets/profileIcon2.png')} style={styles.icon} />;
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: '#020325ff', paddingTop: 2 },
        tabBarActiveTintColor: "white",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={RootStack} />
      <Tab.Screen name="History" component={HistroyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }

})


export default BottomTabs

