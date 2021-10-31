import React, {useState} from 'react';
import {Link, useHistory, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {createHall} from "../../../Store/reducers/ActionCreators";
import close from '../../../Assets/close.png'

const MyComponent = () => {
    const [hallName, setHallName] = useState('')
    const hallsState = useSelector(state => state.hallsReducer)
    const { loading, halls, error } = hallsState
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

    const goBack = () => {

    }

    return (
        <div className="popup active">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление зала
                            <Link to="/home" className="popup__dismiss"><img src={close} alt="Закрыть"/></Link>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        <form onSubmit={(e) => onSubmit(e)} method="post" acceptCharset="utf-8">
                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                                Название зала
                                <input onChange={(e) => handleChange(e)} className="conf-step__input" type="text"
                                       defaultValue={hallName}
                                       placeholder="Например, &laquo;Зал 1&raquo;" name="name" required/>
                            </label>
                            <div className="conf-step__buttons text-center">
                                <input type="submit" value="Добавить зал"
                                       className="conf-step__button conf-step__button-accent"/>
                                    <button className="conf-step__button conf-step__button-regular">
                                        <Link to="/home">Отменить</Link>
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
