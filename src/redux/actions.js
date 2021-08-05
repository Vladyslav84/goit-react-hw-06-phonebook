export const addContact = (value) => {
    return {
        type: "contacts/addContact",
        payload: value,
    }
};

export const deleteContact = (id) => {

    return {
        type: "contacts/deleteContact",
        payload: id,
    }
};

export const filter = (value) => {

    return {
        type: "contacts/filter",
        payload: value,
    }
};