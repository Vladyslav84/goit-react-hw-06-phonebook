import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';
import { v4 as uuidv4 } from 'uuid';

// const contactsArr = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

class App extends Component {

  state = {
    contacts: [],
    filtered: ''
  }

  componentDidUpdate(prevState) {

    if (this.state.contacts !== prevState.contacts)
    {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {

    const parcedContactsList = JSON.parse(localStorage.getItem('contactsList'));

    if (parcedContactsList)
    {
      this.setState({ contacts: parcedContactsList })
    }

  }


  formSubmithandler = (formData) => {

    console.log(formData)

    if (this.state.contacts.some(contact => contact.name === formData.name))
    {
      alert(`${ formData.name } is already in contacts`)
    } else
    {
      const addContact = { ...formData, id: uuidv4() };

      this.setState(prevState => ({

        contacts: [addContact, ...prevState.contacts]

      }
      ))
    };

  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  filtеredValue = evt => {
    this.setState({
      filtered: evt.currentTarget.value
    })
  }

  render() {

    const filteredContactToLowerCase = this.state.filtered.toLocaleLowerCase();

    const filteredContactList = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filteredContactToLowerCase),
    )

    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmithandler} />
        <h2 className={s.title}>Contacts</h2>
        <Filter value={this.state.filtered} onChange={this.filtеredValue} />
        <ContactList
          contactsArr={filteredContactList}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
