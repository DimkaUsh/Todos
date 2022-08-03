import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filtersSet: (state, action) => {state.filter = action.payload}
    },
})

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    filtersSet
} = actions