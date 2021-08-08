import reducerContacts from '../redux/reducers'
import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './slices/contacts';
import filterSlice from './slices/filter';

console.log(filterSlice)
// const store = configureStore({
//   reducer: {
//     reducerContacts: reducerContacts,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

// const filterReducer = {
//   filterSlice,
// }

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