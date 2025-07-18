import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootStack from './RootStack';
import HistroyScreen from '../screens/HistroyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, View } from 'react-native';
import { BottomTabParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={MaterialTopTab}
        options={{
          headerTitleStyle: {
            fontFamily: "serif",
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
      <Tab.Screen name="Profile" component={ProfileScreen} />

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
    gap:2,
  },
  text:{
    fontFamily:"serif",
    fontSize:18,
  }

})


export default BottomTabs

