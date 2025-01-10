import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '../types';

const initialState: FilterState = {
  selectedArea: 'Indian',
  sortOrder: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSelectedArea: (state, action: PayloadAction<string>) => {
      state.selectedArea = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc' | null>) => {
      state.sortOrder = action.payload;
    },
  },
});


export const { setSelectedArea, setSortOrder } = filterSlice.actions;
export default filterSlice.reducer;

