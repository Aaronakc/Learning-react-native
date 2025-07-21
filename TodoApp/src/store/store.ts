import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../store/todoSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'



export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch