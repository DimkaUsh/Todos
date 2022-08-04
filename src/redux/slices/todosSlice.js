import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const todosFetched = createAsyncThunk(
    'todos/todosFetched',
    async (url) => {
        const { data } = await axios.get(url);
        return data;
    }
);

const initialState = {
    todos: [],
    fetchedStatus: 'loading'
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdd: (state, action) => {
          state.todos.push(action.payload)
        },
        todoDelete: (state, action) => {
          state.todos = state.todos.filter(todo => {
          return todo.id !== action.payload
        })},
        todoChange: (state, action) =>{
          const todos = state.todos
          const index = todos.findIndex(todo => todo.id === action.payload)
          todos[index]['fulfilled'] = !todos[index]['fulfilled']
        }
    },
    extraReducers: {
        [todosFetched.pending]: (state) => {
          state.fetchedStatus = 'loading';
        },
        [todosFetched.fulfilled]: (state, action) => {
          state.todos = action.payload;
          state.fetchedStatus = 'success';
        },
        [todosFetched.rejected]: (state, action) => {
          state.fetchedStatus = 'error';
        },
      },
})

const {actions, reducer} = todosSlice;

export default reducer;
export const {
  todoAdd,
  todoDelete,
  todoChange
} = actions