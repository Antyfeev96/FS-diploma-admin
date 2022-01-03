import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleHeaderText, handleInputPlaceholder, handleSubmitText } from '../../functions'
import Input from "../../Components/Popups/Input";

const MyComponent = ({ onSubmit, onCancel, type, select, timePicker, ...props }) => {
    const { start_time, hall } = useSelector(state => state.newSessionState.session)

    return (
        <div className="popup__wrapper">
            <form onSubmit={(e) => onSubmit(e)} method="post" acceptCharset="utf-8">
                {type !== 'session' && <Input type={type} {...props}/>}
                {select}
                {timePicker}
                <div className="conf-step__buttons text-center">
                    <input disabled={hall._id !== '' && start_time === ''} type="submit" value={`Добавить ${handleSubmitText(type)}`}
                           className="conf-step__button conf-step__button-accent"/>
                    <button className="conf-step__button conf-step__button-regular">
                        <Link to="/home" onClick={onCancel} >Отменить</Link>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MyComponent;
