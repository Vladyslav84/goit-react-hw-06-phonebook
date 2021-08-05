import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';


// const contactsArr = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

function App({ valueStore }) {

  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contactsList')) ?? []);
  // const [filtered, setFiltered] = useState('');

  // useEffect(() => {

  //   localStorage.setItem('contactsList', JSON.stringify(contacts));

  // }, [contacts]);


  // const formSubmithandler = (formData) => {

  //   if (contacts.some(contact => contact.name === formData.name))
  //   {
  //     alert(`${ formData.name } is already in contacts`)
  //   } else
  //   {
  //     const addContact = { ...formData, id: uuidv4() };

  //     setContacts(prevContacts => [addContact, ...prevContacts])

  //   };

  // }

  // const deleteContact = contactId => {

  //   setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== contactId)))

  // };

  // const filtеredValue = evt => {

  //   setFiltered(evt.currentTarget.value);

  // }

  // const filteredContactToLowerCase = filtered.toLocaleLowerCase();

  // const filteredContactList = contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(filteredContactToLowerCase),
  // );
  // onSubmit={formSubmithandler}
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {valueStore.length !== 0 && <h2 className={s.title}>Contacts</h2>}
      {valueStore.length !== 0 && <Filter />}
      <ContactList
      // contactsArr={filteredContactList}
      // onDeleteContact={deleteContact} value={filtered}
      />
    </div>
  );

}

const mapStateToProps = state => {

  return {
    valueStore: state.contacts.items,
    // valueFilter: state.contacts.filter
  };

};

export default connect(mapStateToProps, null)(App);