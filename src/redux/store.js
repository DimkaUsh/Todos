import { configureStore } from '@reduxjs/toolkit'; 
import todos from './slices/todosSlice';
import filters from './slices/filtersSlice';


const store = configureStore({ 
    reducer: {todos, filters},
    devTools: process.env.NODE_ENV !== 'production',
    });

export default store;