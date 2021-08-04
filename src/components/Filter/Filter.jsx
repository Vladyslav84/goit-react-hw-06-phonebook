import React from "react";
import PropTypes from 'prop-types';
import s from './Filter.module.css'

const Filter = ({ value, onChange }) => {

    return (
        <div>
            <p className={s.title}>Find contacts by name</p>
            <label>
                <input type="text" value={value} onChange={onChange}></input>
            </label>
        </div>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default Filter;