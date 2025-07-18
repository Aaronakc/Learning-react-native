import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootStack from './RootStack';
import HistroyScreen from '../screens/HistroyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, View } from 'react-native';
import { BottomTabParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialTopTab from './MaterialTopTab';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
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

        tabBarStyle: { backgroundColor: "#b56d69ff" },
        tabBarActiveTintColor: "white",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerTitleAlign:"center",
        headerTitleStyle:{
          fontFamily:"serif",
        }
        }} />
      <Tab.Screen name="History" component={MaterialTopTab}
        options={{
          headerTitleStyle: {
            fontFamily: "serif",
          },
           headerStyle: {
          backgroundColor:"white",
          elevation:0,
        },
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={styles.flex}>
              <MaterialIcon name="history" size={25} color="black"  />
              <Text style={styles.text}>History</Text>
            </View>
          ),

        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        headerTitleAlign:"center",
        headerTitleStyle:{
          fontFamily:"serif",
      
        }
      }} />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  flex:{
    flexDirection:"row",
    alignItems:"center",
    gap:5,
  },
  text:{
    fontFamily:"serif",
    fontSize:20,
  }

})


export default BottomTabs

