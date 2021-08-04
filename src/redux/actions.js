export const addContact = (value) => {
    return {
        type: "contacts/addContact",
        payload: value,
    }
};

export const deleteContact = (value) => {

    return {
        type: "contacts/deleteContact",
        payload: value,
    }
};

export const filter = (value) => {

    return {
        type: "contacts/filter",
        payload: value,
    }
};