import { createStore } from 'redux';

const storeState =
{
    contacts: {
        items: [

        ],
        filter: ''
    }
};

const reducer = (state = storeState, action) => {

    switch (action.type)
    {
        case "contacts/addContact":
            return {
                ...state,
                // contacts: {
                //     ...state.contacts,
                //     item: [action.payload, ...state.contacts.item],
                // }
            }

        case "contacts/deleteContact":
            return {
                ...state,
                contacts: {
                    // ...state.contacts,
                    // item: state.contacts.item.push(action.payload)
                }
            }
        default:
            return state;
    }

};


const store = createStore(reducer);
export default store;