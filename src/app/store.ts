import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/itemSlice';
import categoriesReducer from '../features/categorySlice';
import shoppingListReducer from '../features/shoppingListSlice';

export default configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoriesReducer,
    shoppingList: shoppingListReducer
  }
})