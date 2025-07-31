import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { useAppSelector } from '../store/Hooks'
// import { RootState } from '../store/store'
import { DrawerNavigationProps, MaterialTopTabProps } from '../types/navigation'
import { Todo } from '../types/todos'
import { getTodosFromFirebase } from '../utils/fireStore'
import Loader from '../Components/Loader'




const RemainingTaskPage = ({ navigation }: DrawerNavigationProps<'RemainingTask'>) => {
  // const { todos } = useAppSelector((state: RootState) => state.todo)
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    const loadTodos = async () => {
      try {
        const data = await getTodosFromFirebase()
        if (data)
          console.log(data)
        setTodos(data)
      } catch (error) {
        console.error('Failed to load todos', error)
      }
      finally{
        setLoading(false)
      }
    }

    loadTodos()
  }, [])

  const remainingTodos = todos.filter(todo => !todo.checked)

  if(loading){
    return <Loader/>
  }

  return (
    <View style={styles.container}>
      {remainingTodos.length === 0 ? (
        <Text style={styles.empty}>No remaining tasks left.</Text>
      ) : (
        <FlatList
          data={remainingTodos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskBox}>
              <Text style={styles.title}>Title:{item.title}</Text>
              <Text style={styles.desc}>Description:{item.description}</Text>
              <Text style={styles.date}>Date:{item.date}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 8,
  },
  taskBox: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 4,
    color: '#555',
  },
  date: {
    marginTop: 6,
    fontStyle: 'italic',
    color: '#888',
  },
  empty: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
})

export default RemainingTaskPage
