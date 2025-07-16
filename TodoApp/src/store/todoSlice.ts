import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  title:string,
  description:string,
  date:string,
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
  
  },
})

// Action creators are generated for each case reducer function
export const { addTodo ,deleteTodo} = todoSlice.actions

export default todoSlice.reducer