// import * as actions from '../redux/actions';
// import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const storeState =
{
    contacts: {
        items: JSON.parse(localStorage.getItem('contactsList')) ?? [],
        filter: '',
    }
};

// useEffect(() => {



// }, [state.contacts.items]);
//     const filteredContactList = storeState.contacts.items.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(storeState.contacts.filter),
//   )
    
// console.log(filteredContactList)

const reducer = (state = storeState, actions) => {
    

    // localStorage.setItem('contactsList', JSON.stringify(state.contacts.items));

    // console.log(state.contacts.items);

    switch (actions.type)
    {
        case "contacts/addContact":
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: [actions.payload, ...state.contacts.items],
                }
            }

        case "contacts/deleteContact":
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items.filter(contact => contact.id !== actions.payload),
                }
            }
        case "contacts/filter":

            return {

                ...state,
                contacts: {
                    // ...state.contacts,
                    filter: actions.payload,
                    items: state.contacts.items.filter(contact =>
    contact.name.toLocaleLowerCase().includes(actions.payload),
  )
                    
                }
            }
        default:
            return state;
    }

};


const store = createStore(reducer, composeWithDevTools());
export default store;