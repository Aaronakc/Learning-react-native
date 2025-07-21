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

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator<DrawerNavigationParamList>();
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} >
      <Drawer.Screen name="Home" component={BottomTabs}/>
      <Drawer.Screen name="History" component={MaterialTopTab} options={{headerShown:true,headerTitleStyle:{
        fontFamily:"serif",
      },
      }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:true,headerTitleStyle:{
        fontFamily:"serif",
      },
      }}/>
      <Drawer.Screen name="AllTask" component={AllTaskScreen} options={{headerShown:true,headerTitleStyle:{
        fontFamily:"serif",
      },
      }}/>
      <Drawer.Screen name="CompletedTask" component={CompletedTask} options={{headerShown:true,headerTitleStyle:{
        fontFamily:"serif",
      },
      }} />
      <Drawer.Screen name="RemainingTask" component={RemainingTaskPage} options={{headerShown:true,headerTitleStyle:{
        fontFamily:"serif",
      },
      }}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation