import { View, Text, StyleSheet, Image, TouchableOpacity, Button, FlatList } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useRoute } from '@react-navigation/native';
interface Todo {
  title: string;
  description: string;
  date: string;

}

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
const HomeScreen = ({ navigation }: Props) => {

  const route = useRoute()
  const todos = (route.params as { todos?: Todo[] })?.todos || [];


  const handleNav = () => {
    navigation.navigate('AddTaskScreen')
    // console.error('btn pressed')
  }
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={handleNav}> */}
      <Text style={styles.heading}>My Tasks</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={()=>navigation.navigate('DetailScreen',{todos:todos})}>
              <Text style={styles.font}>Title: {item.title}</Text>

            </TouchableOpacity>
            {/* <Button title="view detail" onPress={() => navigation.navigate('DetailScreen', { todos: todos })} /> */}

          </View>
        )}
      />
      <Text style={styles.text} onPress={handleNav}>+</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

  },
  text: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#7d9aeeff",
    fontSize: 25,
    color: "white",
    position: "absolute",
    top: 495,
    left: 290,
  },
  wrapper: {
    elevation: 3,
    borderRadius:10,
    backgroundColor: "#d4dcf3ff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 20,

  },
  font:{
    fontFamily:"serif",
  },
  heading:{
    fontFamily:"serif",
    fontWeight:"bold",
    fontSize:20,
    marginHorizontal:20,
    marginTop:10,
    

  }
})

export default HomeScreen