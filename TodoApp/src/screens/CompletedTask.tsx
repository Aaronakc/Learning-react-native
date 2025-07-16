import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useAppSelector } from '../store/Hooks'
import { RootState } from '../store/store'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'CompletedTaskScreen'>

const CompletedTask = ({ navigation }: Props) => {
  const { todos } = useAppSelector((state: RootState) => state.todo)

  const completedTodos = todos.filter(todo => todo.checked)

  return (
    <View style={styles.container}>
      {completedTodos.length === 0 ? (
        <Text style={styles.empty}>No completed tasks found.</Text>
      ) : (
        <FlatList
          data={completedTodos}
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
  },
  taskBox: {
    backgroundColor: '#e5c7a3',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
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

export default CompletedTask
