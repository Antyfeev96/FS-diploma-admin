import React from 'react';
import { Link } from "react-router-dom";
import close from "../../Assets/close.png";
import { handleHeaderText } from "../../functions";

const MyComponent = ({ type }) => {
    return (
        <div className="popup__header">
            <h2 className="popup__title">
                Добавление {handleHeaderText(type)}
                <Link to="/home" className="popup__dismiss"><img src={close} alt="Закрыть"/></Link>
            </h2>
        </div>
    );
};

export default MyComponent;
