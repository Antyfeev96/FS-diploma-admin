import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { setSessionHall } from "../../Store/reducers/NewSessionSlice";

function Select() {
    const dispatch = useDispatch()
    const { session } = useSelector(state => state.newSessionState)
    const { halls } = useSelector(state => state.hallsReducer)

    const handleChange = (e) => {
        const { _id, name } = halls.find(hall => hall.name === e.target.value)
        dispatch(setSessionHall({ _id, name }))
    }

    return (
        <label className="conf-step__label conf-step__label-fullsize">
            Название зала
            <select defaultValue={session.hall.name} onChange={handleChange} className="conf-step__input" required>
                {halls.map((hall) => <option key={hall._id}>{hall.name}</option>)}
            </select>
        </label>
    );
}

export default Select;
