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

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const navigation = useNavigation()
  return (

    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,

      }}
    >
      <Stack.Screen name="HomeScreen" component={BottomTabs} />
      <Stack.Screen name="AddTaskScreen" component={AddDetailsPage}
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/crossIcon.png')} style={styles.icon} />
            </TouchableOpacity>
          )

        }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="CompletedTaskScreen" component={CompletedTask} options={{presentation:"modal",animation:'slide_from_left'}}/>
      <Stack.Screen name="RemainingTaskScreen" component={RemainingTaskPage} options={{presentation:"modal",animation:'slide_from_right'}} />

    </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  icon: {
    width: 17,
    height: 17,
    marginRight: 10,
  }
})

export default RootStack