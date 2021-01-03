import { createSlice } from '@reduxjs/toolkit';

export const ItemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    activeItem: null
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    setActiveItem: (state, action) => {
      state.activeItem = action.payload
    }
  }
});

export const { setItems, setActiveItem } = ItemsSlice.actions;
export const selectItems = (state: any )=> state.items.items;
export const selectItem = (state: any )=> state.items.activeItem;
export default ItemsSlice.reducer;