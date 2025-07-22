import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from '../store/todoSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist:['todo'],
}

const rootReducer=combineReducers({
  todo:todoReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disables all serializability checks
    }),
  
})

export const persistor = persistStore(store)



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
