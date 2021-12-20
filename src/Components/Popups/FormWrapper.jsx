import React from 'react';
import {Link} from "react-router-dom";
import {handleHeaderText, handleInputPlaceholder, handleSubmitText} from '../../functions'

const MyComponent = ({ type, onSubmit, handleChange, inputValue }) => {
    return (
        <div className="popup__wrapper">
            <form onSubmit={(e) => onSubmit(e)} method="post" acceptCharset="utf-8">
                <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                    Название {handleHeaderText(type)}
                    <input onChange={(e) => handleChange(e)} className="conf-step__input" type="text"
                           defaultValue={inputValue}
                           placeholder={`Например, «${handleInputPlaceholder(type)}»`} name="name" required/>
                </label>
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
