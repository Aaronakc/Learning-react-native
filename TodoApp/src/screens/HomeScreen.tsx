import { View, Text, StyleSheet, Image, TouchableOpacity, Button, FlatList } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useRoute } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { RootState } from '../store/store';
import { deleteTodo } from '../store/todoSlice';
interface Todo {
  title: string;
  description: string;
  date: string;

}

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
const HomeScreen = ({ navigation }: Props) => {

  // const route = useRoute()
  // const todos = (route.params as { todos?: Todo[] })?.todos || [];
  const { todos } = useAppSelector((state: RootState) => state.todo)
  const dispatch= useAppDispatch()


  const handleNav = () => {
    navigation.navigate('AddTaskScreen')
    // console.error('btn pressed')
  }

  const handleDeleteIndex=(i:number)=>{
    dispatch(deleteTodo(i))

  }
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={handleNav}> */}
      <Text style={styles.heading}>My Tasks</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item ,index}) => (
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
              <View style={styles.flex}>
                <Text style={styles.font}>Title: {item.title}</Text>
                <TouchableOpacity onPress={()=>handleDeleteIndex(index)}>
                  <Image source={require('../../assets/deleteIcon.png')} style={styles.icon} />
                </TouchableOpacity>
              </View>

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
    borderRadius: 10,
    backgroundColor: "#d4dcf3ff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 10,

  },
  font: {
    fontFamily: "serif",
  },
  heading: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 10,


  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    width: 18,
    height: 18,
  }
})

export default HomeScreen