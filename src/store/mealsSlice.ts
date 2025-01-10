import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Meal } from '../types';

export const fetchMealsByArea = createAsyncThunk(
  'meals/fetchByArea',
  async (area: string) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const meals = response.data.meals.map((meal: Meal) => ({
      ...meal,
      rating: (Math.random() * 2 + 3).toFixed(1),
    }));
    return meals;
  }
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    items: [] as Meal[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealsByArea.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMealsByArea.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMealsByArea.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch meals';
      });
  },
});

export default mealsSlice.reducer;