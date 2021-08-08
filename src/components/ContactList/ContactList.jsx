import React, { useEffect } from 'react';
import s from './ContactList.module.css';
// import PropTypes from 'prop-types';
// import s from './ContactList.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
// import { addContact, deleteContact, filter } from '../../redux/actions';


export default function ContactList  ()  {
  
  const allContacts = useSelector(state => state.reducerContacts.value);
  const filter = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(filter)

  const filteredContactList = allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter));

  useEffect(() => {

    localStorage.setItem('contactsList', JSON.stringify(allContacts));

  }, [allContacts]);

  return (
    <ul className={s.contactList}>
      {filteredContactList.map((user) => (

        <li key={user.id} className={s.contactitem} >
          <span>{user.name} {user.number}</span>
          <button type='button' className={s.btn}
            onClick={() => dispatch(actions.deleteContact(user.id))}
          >Delete</button>
        </li>
      ))}
    </ul>
  )
}

