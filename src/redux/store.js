import reducerContacts from '../redux/reducers'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    reducerContacts: reducerContacts,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;