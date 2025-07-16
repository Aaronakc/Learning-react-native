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
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action:PayloadAction<Todo>) => {
    state.todos.push(action.payload)
    },

    deleteTodo:(state,action:PayloadAction<number>)=>{
    state.todos=state.todos.filter((_,index)=>index !== action.payload)
    },

    toggleTodo:(state,action:PayloadAction<number>)=>{
    const index=action.payload
    if(state.todos[index])
      state.todos[index].checked=!state.todos[index].checked
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
      }

    }
  
  },
})

export const { addTodo ,deleteTodo,toggleTodo, startEdit,saveEdit} = todoSlice.actions

export default todoSlice.reducer