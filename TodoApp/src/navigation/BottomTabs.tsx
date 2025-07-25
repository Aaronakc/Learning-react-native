import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootStack from './RootStack';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BottomTabParamList, DrawerNavigationProps, HomeTabScreenProps } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialTopTab from './MaterialTopTab';
import { Text } from 'react-native';
import MenuButton from '../Components/MenuButton';
import { getAuth, signOut } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';


const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = ({navigation}:DrawerNavigationProps<'Home'>) => {
  const handleLogout=()=>{
    signOut(getAuth()).then(()=>navigation.navigate('Login'))
    Toast.show({
      type:"success",
      text1:"Logged out successfully"

    })
  }
  return (
    <Tab.Navigator
      initialRouteName="BottomHome"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = '';

          if (route.name === 'BottomHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={24} color={color} />;

        },
        headerShown: true,
        headerTitle: route.name,
        headerLeft: () => <MenuButton />,

        tabBarStyle: { backgroundColor: "#900157ff" },
        tabBarActiveTintColor: "white",
        tabBarHideOnKeyboard: true,

      })}
    >
      <Tab.Screen name="BottomHome" component={HomeScreen} options={{
        // headerShown: false,
        headerLeft: () => <MenuButton />,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "serif",
        },
        headerTitle: 'Home',
        tabBarLabel: 'Home',

        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <View style={{
              backgroundColor: "#900157ff",
              width: 35,
              height: 35,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>A</Text>
            </View>
          </TouchableOpacity>
        ),

      }} />

      <Tab.Screen name="History" component={MaterialTopTab}
        options={{
          headerShown: true,
          headerTitleStyle: {
            fontFamily: "serif",
          },
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
          },
          headerTitleAlign: "center",
          headerLeft: () => <MenuButton />,
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons name="search" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "serif",

        },
        headerLeft: () => <MenuButton />,
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }} onPress={handleLogout}>
            <MaterialIcon name="logout" size={24} color="black" />
          </TouchableOpacity>
        ),
      }} />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontFamily: "serif",
    fontSize: 20,
  }

})


export default BottomTabs

