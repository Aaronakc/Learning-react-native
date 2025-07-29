import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { useAppSelector } from '../store/Hooks'
// import { RootState } from '../store/store'
import { DrawerNavigationProps, MaterialTopTabProps } from '../types/navigation'
import { getTodosFromFirebase } from '../utils/FireStore'
import { Todo } from '../types/todos'
import Loader from '../Components/Loader'


const AllTaskScreen = ({ navigation }: DrawerNavigationProps<'AllTask'>) => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await getTodosFromFirebase()
        if (data)
          console.log(data)
        setTodos(data)
      } catch (error) {
        console.error('Failed to load todos', error)
      }
    }

    loadTodos()
  }, [])

  // const { todos } = useAppSelector((state: RootState) => state.todo)
 

  return (
    <View style={{ flex: 1, marginTop: 12, marginBottom: 15 }}>
      {todos.length === 0 ? (
        <Text style={styles.text}>No task to Show</Text>)
        : (
          <FlatList
            data={todos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { todoid: item.todoid })}>
                  <View >
                    <Text style={styles.font}>Title: <Text>{item.title}</Text></Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />

        )}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    elevation: 3,
    borderRadius: 10,
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
  text: {
    textAlign: "center",
    color: "gray",
    marginTop: 16,
  }
})

export default AllTaskScreen