import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function ContactForm({ onSubmit }) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name)
        {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({ name, number });
        resetContactForm();
    };

    const resetContactForm = () => {
        setNumber('');
        setName('');

    };

    const numberInputId = uuidv4();
    const nameInputId = uuidv4();
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <span>Name</span>
            <label className={s.formItem}>
                <input
                    autoComplete="off"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                    value={name}
                    id={nameInputId}
                />
            </label>
            <span className={s.number}>Number</span>
            <label className={s.formItem}>
                <input
                    autoComplete="off"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                    value={number}
                    id={numberInputId}
                />
            </label>
            <button type="submit" className={s.btn}>Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,

}

export default ContactForm;