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
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <Text>Title: {item.title}</Text>
            <Button title="view detail" onPress={() => navigation.navigate('DetailScreen', { todos: todos })} />

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
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'gray',
    fontSize: 20,
    color: "white",
    position: "absolute",
    top: 495,
    left: 290,
  },
  wrapper: {
    elevation: 5,
    backgroundColor: "pink",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginVertical: 5,

  }
})

export default HomeScreen