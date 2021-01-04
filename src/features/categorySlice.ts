import { createSlice } from '@reduxjs/toolkit';

export const CategorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: []
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  }
});

export const { setCategories } = CategorySlice.actions;
export const selectCategories = (state: any ) => state.items.items;
export default CategorySlice.reducer;