import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { RootState } from '../store/store';
import { deleteTodo, toggleTodo } from '../store/todoSlice';
import { HomeTabScreenProps } from '../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getTodosFromFirebase } from '../utils/FireStore';
import { Todo } from '../types/todos';


const HomeScreen = ({ navigation }: HomeTabScreenProps<'BottomHome'>) => {
    const [todos, setTodos] = useState<Todo[]>([])

  // const { todos } = useAppSelector((state: RootState) => state.todo)
  // const dispatch = useAppDispatch()
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await getTodosFromFirebase()
        if(data)
          console.log(data)
        setTodos(data)
      } catch (error) {
        console.error('Failed to load todos', error)
      }
    }

    loadTodos()
  }, [])

  const handleNav = () => {
    navigation.navigate('AddTaskScreen')

  }

  const handleDeleteIndex = (i: number) => {
    // dispatch(deleteTodo(i))
    // deleteTodoFromFireStore(i.toString())

  }

  const handleToggleIndex = (i: number) => {
    // dispatch(toggleTodo(i))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Tasks</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { index })}>
              <View style={styles.flex}>
                <View style={[styles.flex, { gap: 20, flex: 1 }]}>
                  <TouchableOpacity onPress={() => handleToggleIndex(index)}>
                    <Image source={item.checked ? require('../../assets/checkIcon.png') : require('../../assets/unCheckIcon.png')} style={styles.icon} />
                  </TouchableOpacity>
                  <Text style={styles.font}>Title: <Text>{item.title}</Text></Text>
                </View>
                <TouchableOpacity onPress={() => handleDeleteIndex(index)}>
                  <Ionicons name="trash-outline" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
    marginBottom: 70,
    marginTop: 0,

  },
  text: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: "#7d9aeeff",
    // backgroundColor: "#cb736e",
    backgroundColor: "#900157ff",
    fontSize: 25,
    color: "white",
    position: "absolute",
    top: 440,
    left: 290,
    fontWeight: "bold",
    // left: 160,
  },
  wrapper: {
    elevation: 3,
    borderRadius: 10,
    // backgroundColor: "#d4dcf3ff",
    paddingHorizontal: 20,
    paddingVertical: 28,
    marginHorizontal: 20,
    marginVertical: 10,

  },
  font: {
    fontFamily: "serif",
    flex: 1,
    paddingRight: 15,

  },
  heading: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "left",
    marginHorizontal: 20,
    marginTop: 20,
    color: "#900157ff",
    marginBottom: 10,
  },

  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  icon: {
    width: 18,
    height: 18,
  },
  flexBox: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Completedbtn: {
    backgroundColor: "#cb736e",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,

  },
  Remainingbtn: {
    backgroundColor: "#e49e7e",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,


  },
  title: {
    color: "white",
    fontFamily: "serif",

  }
})

export default HomeScreen