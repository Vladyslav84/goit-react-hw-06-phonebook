import React from "react";
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const Filter = ({ inputFilter }) => {

    return (
        <div>
            <p className={s.title}>Find contacts by name</p>
            <label>
                <input type="text" onChange={(evt) => inputFilter(evt.currentTarget.value)}></input>
            </label>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        inputFilter: (filterValue) => dispatch(actions.filter(filterValue.toLocaleLowerCase())),
    }

};

Filter.propTypes = {
    // value: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
}
export default connect(null, mapDispatchToProps)(Filter);

// value={value}
// value