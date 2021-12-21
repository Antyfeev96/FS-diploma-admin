import React from 'react';
import {handleHeaderText, handleInputPlaceholder} from "../../functions";

const MyComponent = (props) => {
    return (
        <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
            Название {handleHeaderText(props.type)}
            <input onChange={(e) => props.handleChange(e)} className="conf-step__input" type="text"
                   defaultValue={props.inputValue}
                   placeholder={`Например, «${handleInputPlaceholder(props.type)}»`} name="name" required/>
        </label>
    );
};

export default MyComponent;
