import React from "react";
// import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
// import * as actions from '../../redux/actions';
import { addContact, deleteContact, filter } from '../../redux/actions';

export default function Filter () {
const dispatch = useDispatch();
    return (
        <div>
            <p className={s.title}>Find contacts by name</p>
            <label>
                <input type="text" onChange={(evt) => dispatch(filter(evt.currentTarget.value.toLocaleLowerCase()))}></input>
            </label>
        </div>
    )
};

// const mapDispatchToProps = dispatch => {
//     return {
//         inputFilter: (filterValue) => dispatch(actions.filter(filterValue.toLocaleLowerCase())),
//     }

// };

Filter.propTypes = {
    // value: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired,
}
// export default connect(null, mapDispatchToProps)(Filter);

