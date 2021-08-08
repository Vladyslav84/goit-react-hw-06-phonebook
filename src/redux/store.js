import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contacts';
import filterSlice from './slices/filter';

const rootReducer = {
  contactsSlice,
  filterSlice
};

const store = configureStore({
  reducer: 
    rootReducer,

  devTools: process.env.NODE_ENV !== "production",
});

export default store;