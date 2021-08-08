import React from "react";
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/actions';

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

