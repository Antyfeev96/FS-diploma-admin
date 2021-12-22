import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Select() {
    const dispatch = useDispatch()
    const { halls } = useSelector(state => state.hallsReducer)
    return (
        <label className="conf-step__label conf-step__label-fullsize">
            Название зала
            <select className="conf-step__input" required>
                {halls.map((hall, index) => <option key={hall._id} defaultValue={index === 0}>{hall.name}</option>)}
            </select>
        </label>
    );
}

export default Select;
