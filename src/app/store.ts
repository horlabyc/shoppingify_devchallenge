import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/itemSlice';
import categoriesReducer from '../features/categorySlice';

export default configureStore({
  reducer: {
    items: itemsReducer,
    categories: categoriesReducer
  }
})