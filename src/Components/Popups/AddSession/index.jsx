import React from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Header from "../../../Components/Popups/Header";
import FormWrapper from "../../../Components/Popups/FormWrapper";
import PopupWrapper from "../../../Components/Popups/PopupWrapper";
import Select from "../../../Components/Popups/Select";
import TimePicker from "../../../Components/Popups/TimePicker";
import { resetState, createNewSession } from '../../../Store/reducers/NewSessionSlice'
import { fetchHalls } from "../../../Store/reducers/HallsSlice";

const MyComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onCancel = () => {
        dispatch(resetState())
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createNewSession())
        dispatch(resetState())
        dispatch(fetchHalls())
        history.push('/home')
    }

    return (
        <PopupWrapper>
            <Header type="session"/>
            <FormWrapper
                type="session"
                onSubmit={onSubmit}
                onCancel={onCancel}
                select={<Select/>}
                timePicker={<TimePicker/>}
            />
        </PopupWrapper>
    );
};

export default MyComponent;
