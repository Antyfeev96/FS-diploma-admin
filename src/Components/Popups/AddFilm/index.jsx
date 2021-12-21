import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import PopupWrapper from "../../../Components/Popups/PopupWrapper";
import Header from "../../../Components/Popups/Header";
import FormWrapper from "../../../Components/Popups/FormWrapper";
import {createFilm} from "../../../Store/reducers/FilmsSlice";

const MyComponent = () => {
    const [filmName, setFilmName] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        setFilmName(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createFilm(filmName))
        history.push('/home')
    }

    return (
        <PopupWrapper>
            <Header type="film"/>
            <FormWrapper
                type="film"
                inputValue={filmName}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
        </PopupWrapper>
    );
};

export default MyComponent;
