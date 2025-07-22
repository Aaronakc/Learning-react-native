import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Toast from 'react-native-toast-message'

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


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action:PayloadAction<Todo>) => {
    state.todos.push(action.payload)
    
    Toast.show({
      type:'success',
      text1:'Tasked Added!',
      text2:'Task has been added Successfully!',

    })
    }, 

    deleteTodo:(state,action:PayloadAction<number>)=>{
    state.todos=state.todos.filter((_,index)=>index !== action.payload)
  
    Toast.show({
      type:'success',
      text1:"Task Deleted!",
      text2:'Your task has been deleted Successfully',
    })
    },

    toggleTodo:(state,action:PayloadAction<number>)=>{
    const index=action.payload
    if(state.todos[index])
      state.todos[index].checked=!state.todos[index].checked
    if(state.todos[index].checked){
      Toast.show({
        type:'info',
        text1:'Task Completed!',
        text2:'Task has been Completed.',
      })
    }
   
    },
    
    startEdit:(state,action:PayloadAction<number>)=>{
    const index=action.payload
    if(state.todos[index])
      state.todos[index].edit= true
  
    },

    saveEdit:(state,action:PayloadAction<{index:number;title:string;description:string,date:string}>)=>{
      const {index,title,description,date}=action.payload;
      if(state.todos[index]){
        state.todos[index]={
          ...state.todos[index],title,description,date,edit:false,
        }
      
        Toast.show({
          type:'success',
          text1:'Task Edited!',
          text2:'Task has been edited Successfully',

        })
      }

    }
  
  },
})

export const {addTodo ,deleteTodo,toggleTodo, startEdit,saveEdit} = todoSlice.actions

export default todoSlice.reducer