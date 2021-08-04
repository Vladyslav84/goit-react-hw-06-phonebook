import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
// import s from './ContactList.module.css';

const ContactList = ({ contactsArr, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contactsArr.map((user) => (
        <li key={user.id} className={s.contactitem} >
          <span>{user.name} {user.number}</span>
          <button type='button' className={s.btn}
            onClick={() => onDeleteContact(user.id)}
          >Delete</button>
        </li>
      ))}
    </ul>
  )
}

ContactList.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default ContactList;