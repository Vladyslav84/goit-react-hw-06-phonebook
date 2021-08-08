import { createAction } from '@reduxjs/toolkit';

// export const addContact = (value) => {
//     return {
//         type: "contacts/addContact",
//         payload: value,
//     }
// };

// export const deleteContact = (id) => {

//     return {
//         type: "contacts/deleteContact",
//         payload: id,
//     }
// };

// export const filter = (value) => {

//     return {
//         type: "contacts/filter",
//         payload: value,
//     }
// };

  export const addContact = createAction('contacts/addContact');
  export const deleteContact = createAction('contacts/deleteContact');
 export const filter = createAction('contacts/filter');
 
// export { addContact, deleteContact, filter };