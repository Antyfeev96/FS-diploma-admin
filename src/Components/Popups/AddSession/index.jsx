import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Header from "../../../Components/Popups/Header";
import FormWrapper from "../../../Components/Popups/FormWrapper";
import PopupWrapper from "../../../Components/Popups/PopupWrapper";
import Select from "../../../Components/Popups/Select";
import TimePicker from "../../../Components/Popups/TimePicker";

const MyComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory()


    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        history.push('/home')
    }
    return (
        <PopupWrapper>
            <Header type="session"/>
            <FormWrapper
                type="session"
                onSubmit={onSubmit}
                select={<Select/>}
                timePicker={<TimePicker/>}
            />
        </PopupWrapper>
    );
};

export default MyComponent;
