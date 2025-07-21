import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  title:string,
  description:string,
  date:string,
  checked:boolean,
  edit:boolean,
}

interface TodoState{
  todos:Todo[]
}

const initialState: TodoState = {
  todos:[],
}

export const storeToStorage = async (todos:Todo[]) => {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (error) {
    console.error(`Error storing data for key":`, error);
  }
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    loadTodo: (state, action) => {
      state.todos = action.payload
    },
    addTodo: (state,action:PayloadAction<Todo>) => {
    state.todos.push(action.payload)
    storeToStorage(state.todos)
    }, 

    deleteTodo:(state,action:PayloadAction<number>)=>{
    state.todos=state.todos.filter((_,index)=>index !== action.payload)
    storeToStorage(state.todos)
    },

    toggleTodo:(state,action:PayloadAction<number>)=>{
    const index=action.payload
    if(state.todos[index])
      state.todos[index].checked=!state.todos[index].checked
    storeToStorage(state.todos)
    },
    
    startEdit:(state,action:PayloadAction<number>)=>{
    const index=action.payload
    if(state.todos[index])
      state.todos[index].edit= true
    storeToStorage(state.todos)
    },

    saveEdit:(state,action:PayloadAction<{index:number;title:string;description:string,date:string}>)=>{
      const {index,title,description,date}=action.payload;
      if(state.todos[index]){
        state.todos[index]={
          ...state.todos[index],title,description,date,edit:false,
        }
        storeToStorage(state.todos)
      }

    }
  
  },
})

export const { loadTodo, addTodo ,deleteTodo,toggleTodo, startEdit,saveEdit} = todoSlice.actions

export default todoSlice.reducer