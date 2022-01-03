import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components'
import { getHallSlots, setSessionTime } from "../../Store/reducers/NewSessionSlice";

const Select = styled.select`
  display: flex;
  width: 100%;
  padding: 8px;
  background-color: white;
  
  :focus-visible {
    outline: none;
  }
`

function TimePicker() {
    const dispatch = useDispatch()
    const { slots, loading, session } = useSelector(state => state.newSessionState)

    useEffect(() => {
        dispatch(getHallSlots())
    }, [dispatch, session.hall])

    const handleSetTime = (e) => {
        dispatch(setSessionTime(e.target.value))
    }

    return (
        <>
            <label className="conf-step__label conf-step__label-fullsize">
                Время начала
                {loading && <h2>Loading...</h2>}
                {slots && !loading &&
                <Select defaultValue={session.start_time} onChange={handleSetTime}>
                    {Object.entries(slots)
                        .filter(([key, value]) => value === '')
                        .map(([key, value]) =>
                            <option key={key}>{key}</option>
                        )}
                </Select>}
            </label>
            <h2>Вы добавляете фильм {session.film.name}</h2>
        </>
    );
}

export default TimePicker;
