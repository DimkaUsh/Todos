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
        todosSet: (state, action) => {state.filter = action.payload}
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
    todosSet
} = actions