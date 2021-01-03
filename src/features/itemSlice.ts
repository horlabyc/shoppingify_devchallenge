import { createSlice } from '@reduxjs/toolkit';

export const ItemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: []
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    }
  }
});

export const { setItems } = ItemsSlice.actions;
export const selectItems = (state: any )=> state.items.items;
export default ItemsSlice.reducer;