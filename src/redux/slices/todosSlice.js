import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        todosSet: (state, action) => {state.filter = action.payload}
    },
})

const {actions, reducer} = todosSlice;

export default reducer;
export const {
    todosSet
} = actions