import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
// import s from './ContactList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';


const ContactList = ({ allContacts, filter, onDeleteContact }) => {


  const filteredContactList = allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter),
  )

  // console.log(filteredContactList)


  // useEffect(() => {

  //   localStorage.setItem('contactsList', JSON.stringify(valueStore));

  // }, [valueStore]);

  return (
    <ul className={s.contactList}>
      {filteredContactList.map((user) => (

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

const mapStateToProps = state => {

  return {
    allContacts: state.contacts.items,
    filter: state.contacts.filter
  };

};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
  }

};

ContactList.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);