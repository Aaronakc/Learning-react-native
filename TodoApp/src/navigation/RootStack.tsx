import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import { RootStackParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import AddDetailsPage from '../screens/AddDetailsPage';
import DetailScreen from '../screens/DetailScreen';
import CompletedTask from '../screens/CompletedTask';
import RemainingTaskPage from '../screens/RemainingTaskPage';
import BottomTabs from './BottomTabs';
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DrawerNavigation from './DrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useAppDispatch } from '../store/Hooks';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import EditProfileScreen from '../screens/EditProfileScreen';
// import { loadTodo } from '../store/todoSlice';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const navigation = useNavigation()

  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState<any>(null)


  const handleAuthStateChanged = (user: any) => {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber;

  }, [])

    if (initializing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E3098C" />
      </View>
    );
  }

  return (

    <Stack.Navigator
      initialRouteName={user ? 'HomeScreen' : 'Login'}
      screenOptions={{
        headerShown: false,
        animation: "none",

      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={DrawerNavigation} options={{
        animation: 'none',
      }} />

      <Stack.Screen name="AddTaskScreen" component={AddDetailsPage}
        options={{
          presentation: 'modal',
          headerTitle:"Add Todo Task",
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
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}
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
        headerTitle:"Details",
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
  },
    loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

export default RootStack