import React from 'react';
import {Link} from "react-router-dom";
import { handleHeaderText, handleInputPlaceholder, handleSubmitText } from '../../functions'
import Input from "../../Components/Popups/Input";

const MyComponent = ({ onSubmit, type, select, timePicker, ...props }) => {
    return (
        <div className="popup__wrapper">
            <form onSubmit={(e) => onSubmit(e)} method="post" acceptCharset="utf-8">
                {type !== 'session' && <Input type={type} {...props}/>}
                {select}
                {timePicker}
                <div className="conf-step__buttons text-center">
                    <input type="submit" value={`Добавить ${handleSubmitText(type)}`}
                           className="conf-step__button conf-step__button-accent"/>
                    <button className="conf-step__button conf-step__button-regular">
                        <Link to="/home">Отменить</Link>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MyComponent;
