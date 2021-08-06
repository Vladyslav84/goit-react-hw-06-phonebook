// import * as actions from '../redux/actions';
// import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const storeState =
{
    contacts: {
        items: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
        filter: '',
    }
};

// useEffect(() => {



// }, [state.contacts.items]);


const reducer = (state = storeState, actions) => {

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
                    ...state.contacts,
                    filter: actions.payload,

                }
            }
        default:
            return state;
    }

};


const store = createStore(reducer, composeWithDevTools());
export default store;