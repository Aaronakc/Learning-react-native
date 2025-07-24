import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllTaskScreen from '../screens/AllTaskScreen';
import CompletedTask from '../screens/CompletedTask';
import RemainingTaskPage from '../screens/RemainingTaskPage';
import { DrawerNavigationParamList } from '../types/navigation';
import BottomTabs from './BottomTabs';
import MaterialTopTab from './MaterialTopTab';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawerContent from '../Components/CustomDrawerContent';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator<DrawerNavigationParamList>();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabs} options={{ drawerIcon: ({ color, size }) => (
          <Icon name="home" size={size} color={color} />
        ),}}/>
      <Drawer.Screen name="History" component={MaterialTopTab} options={{
        headerShown: true, headerTitleStyle: {
          fontFamily: "serif",
        },
         drawerIcon: ({ color, size }) => (
          <Icon name="history" size={size} color={color} />
        ),
       
      }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{
        headerShown: true, headerTitleStyle: {
          fontFamily: "serif",
        },
         drawerIcon: ({ color, size }) => (
          <Icon name="person" size={size} color={color} />
        ),
      }} />
      <Drawer.Screen name="AllTask" component={AllTaskScreen} options={{
        headerShown: true, headerTitleStyle: {
          fontFamily: "serif",
        },
         drawerIcon: ({ color, size }) => (
          <Icon name="task" size={size} color={color} />
        ),
      }} />
      <Drawer.Screen name="CompletedTask" component={CompletedTask} options={{
        headerShown: true, headerTitleStyle: {
          fontFamily: "serif",
        },
         drawerIcon: ({ color, size }) => (
          <Icon name="check" size={size} color={color} />
        ),
      }} />
      <Drawer.Screen name="RemainingTask" component={RemainingTaskPage} options={{
        headerShown: true, headerTitleStyle: {
          fontFamily: "serif",
        },
         drawerIcon: ({ color, size }) => (
          <Icon name="hourglass-bottom" size={size} color={color} />
        ),
      }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation