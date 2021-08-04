import { createStore } from 'redux';
import * as actions from '../redux/actions';

const storeState =
{
    contacts: {
        items: [

        ],
        filter: ''
    }
};

const reducer = (state = storeState, actions) => {

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
                    dd: console.log(state.contacts.items)
                }
            }
        default:
            return state;
    }

};


const store = createStore(reducer);
export default store;