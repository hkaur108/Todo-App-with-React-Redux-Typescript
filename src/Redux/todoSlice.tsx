import { createSlice, current } from '@reduxjs/toolkit';
import type {  PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Redux/store'

interface Properties{
    id:Number,
    text:String,
    completed:Boolean
}

interface TodoState {
    todos:Properties[]
}

const initialState :TodoState={
    todos:[]
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<Properties>):TodoState => {
      console.log(current(state.todos),"checking all todos")
         return{
          ...state,
          todos:[action.payload,...state.todos]
         }
    },
     allTodos:(state:any)=>{
      
      console.log(...state.todos)
      return {
        todos:[...state.todos],
      }
    },
    clearCompleted:(state):any=>{
    let todo=  state.todos.filter((item:any) => item.completed === false);
    return{
      ...state,
      todos:todo
    }
  },
  markCompleted:(state,action:PayloadAction<any>):any=>{
  const {item} =action.payload;
   const todo=state.todos.find((todo:any)=>todo.id === item.id);
   if(todo){
    todo.completed=!todo.completed
   }
    },


    markAllCompleted:(state)=>{
      state.todos.forEach((item)=>item.completed=true)

    },
   
  }
})

export const { getTodos,markCompleted, clearCompleted,markAllCompleted} = todoSlice.actions

export const selectTodo = (state: RootState) => state.todos

export default todoSlice.reducer