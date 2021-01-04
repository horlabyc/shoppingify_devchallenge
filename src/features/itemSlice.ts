import { createSlice } from '@reduxjs/toolkit';
import { GET, POST } from '../services/http';

export const ItemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    loading: false,
    hasErrors: false,
    activeItem: null
  },
  reducers: {
    getItems: (state) => {
      state.loading = true;
    },
    getItemsSuccess: (state, {payload}) => {
      state.items = payload;
      state.loading = false;
    },
    getItemsFailed: (state) => {
      state.hasErrors = true;
      state.loading = false;
    },
    setActiveItem: (state, action) => {
      state.activeItem = action.payload
    }
  }
});

export const fetchItems = () => {
  return async (dispatch: any) => {
    dispatch(getItems());
    try {
      const items = await GET('items');
      dispatch(getItemsSuccess(items.data.data.items));
    } catch (error) {
      dispatch(getItemsFailed())
    }
  }
}

export const { getItems, setActiveItem, getItemsSuccess, getItemsFailed } = ItemsSlice.actions;
export const ItemsSelector = (state: any )=> state.items;
export const selectItem = (state: any )=> state.items.activeItem;
export default ItemsSlice.reducer;