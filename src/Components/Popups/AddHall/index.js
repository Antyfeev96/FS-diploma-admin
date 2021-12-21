import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {createHall} from "../../../Store/reducers/ActionCreators";
import PopupWrapper from "../../../Components/Popups/PopupWrapper";
import Header from "../../../Components/Popups/Header";
import FormWrapper from "../../../Components/Popups/FormWrapper";

const MyComponent = () => {
    const [hallName, setHallName] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setHallName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createHall(hallName))
        history.push('/home')
    }

    return (
        <PopupWrapper>
            <Header type="hall"/>
            <FormWrapper
                type="hall"
                inputValue={hallName}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
        </PopupWrapper>
    );
};

export default MyComponent;
