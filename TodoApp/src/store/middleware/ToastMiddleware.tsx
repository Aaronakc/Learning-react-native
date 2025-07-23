import Toast from 'react-native-toast-message'
import { Middleware } from '@reduxjs/toolkit'

export const toastMiddleware: Middleware = ({ getState }) => next => (action: any) => {
  const result = next(action)

  switch (action.type) {
    case 'todo/addTodo':
      Toast.show({
        type: 'success',
        text1: 'Task Added!',
        text2: 'Task has been added successfully.',
      })
      break
    case 'todo/deleteTodo':
      Toast.show({
        type: 'success',
        text1: 'Task Deleted!',
        text2: 'Task deleted successfully.',
      })
      break
    case 'todo/toggleTodo':
      // console.log(action)
      const index = action.payload
      const item = getState().todo.todos[index]
      if (item.checked) {
        Toast.show({
          type: 'info',
          text1: 'Task Completed!',
          text2: 'Task has been Completed.',
        })
      }

      break
    case 'todo/saveEdit':
      Toast.show({
        type: 'success',
        text1: 'Task Edited!',
        text2: 'Task edited successfully.',
      })
      break
  }

  return result
}
