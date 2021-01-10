import { createSlice } from '@reduxjs/toolkit';
import { GET } from '../services/http';

export const ShoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    shoppingLists: [],
    loading: false,
    hasErrors: false
  },
  reducers: {
    getLists: (state) => {
      state.loading = true;
    },
    getListsSuccess: (state, {payload}) => {
      state.shoppingLists = payload;
      state.loading = false;
    },
    getListsFailed: (state) => {
      state.hasErrors = true;
      state.loading = false;
    },
  }
});

export const fetchLists = () => {
  return async (dispatch: any) => {
    dispatch(getLists());
    try {
      const lists = await GET('shoppingList');
      dispatch(getListsSuccess(lists.data.data));
    } catch (error) {
      dispatch(getListsFailed())
    }
  }
}

export const { getLists, getListsSuccess, getListsFailed } = ShoppingListSlice.actions;
export const ShoppingListSelector = (state: any ) => state.shoppingList;
export default ShoppingListSlice.reducer;