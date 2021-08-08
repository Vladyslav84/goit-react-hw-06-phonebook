import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filter } from '../redux/actions';
import { combineReducers } from 'redux';

const reducerContacts = createReducer(JSON.parse(localStorage.getItem('contactsList')) ?? [], {
    
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const reducerFilter = createReducer('', {
  [filter]: (_, {payload}) => payload,
});
 
export default combineReducers({
  value: reducerContacts,
  filter: reducerFilter,
})