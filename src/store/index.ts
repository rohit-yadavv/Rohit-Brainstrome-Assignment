import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import mealsReducer from './mealsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    meals: mealsReducer,
  },
});