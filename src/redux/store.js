import { createStore } from 'redux';

const storeState =
{
    contacts: {
        items: [],
        filter: ''
    }
};

const reducer = (state = storeState, action) => state;

const store = createStore(reducer);
export default store;