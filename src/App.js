import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';
import { useSelector } from 'react-redux';

export default function App() {
const allContacts = useSelector(state => state.reducerContacts.value);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {allContacts.length !== 0 && <h2 className={s.title}>Contacts</h2>}
      {allContacts.length !== 0 && <Filter />}
      <ContactList />
    </div>
  );

}
