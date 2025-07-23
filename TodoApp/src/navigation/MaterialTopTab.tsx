import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import CompletedTask from '../screens/CompletedTask'
import RemainingTaskPage from '../screens/RemainingTaskPage'
import { MaterialTopTabParamList } from '../types/navigation'
import AllTaskScreen from '../screens/AllTaskScreen'
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator<MaterialTopTabParamList>()

const MaterialTopTab = () => {
  return (
    <Tab.Navigator initialRouteName="AllTask"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#900157ff",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: "white",
        
      }}
      
    >
      <Tab.Screen name='AllTask' component={AllTaskScreen} />
      <Tab.Screen name='CompletedTask' component={CompletedTask} />
      <Tab.Screen name='RemainingTask' component={RemainingTaskPage} />
    </Tab.Navigator>


  )
}

export default MaterialTopTab