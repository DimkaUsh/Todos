import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const filtersFetched = createAsyncThunk(
    'filters/filtersFetched',
    async (url) => {
        const { data } = await axios.get(url);
        return data;
    }
);

const initialState = {
    filters: [],
    fetchedStatus: 'loading',
    filterSelected: 'all',
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        filterSelect: (state, action) => {
            state.filterSelected = action.payload
        }
    },
    extraReducers: {
        [filtersFetched.pending]: (state) => {
          state.fetchedStatus = 'loading';
        },
        [filtersFetched.fulfilled]: (state, action) => {
          state.filters = action.payload;
          state.fetchedStatus = 'success';
        },
        [filtersFetched.rejected]: (state, action) => {
          state.fetchedStatus = 'error';
        },
      },
})

const {actions, reducer} = filtersSlice;

export default reducer;
export const {
    filterSelect
} = actions