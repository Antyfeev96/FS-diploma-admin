import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import close from '../../../Assets/close.png'

const MyComponent = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div className="popup active">
            <div className="popup__container">
                <div className="popup__content">
                    <div className="popup__header">
                        <h2 className="popup__title">
                            Добавление зала
                            <Link to="/home" className="popup__dismiss" href="#"><img src={close} alt="Закрыть"/></Link>
                        </h2>
                    </div>
                    <div className="popup__wrapper">
                        <form action="add_hall" method="post" acceptCharset="utf-8">
                            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                                Название зала
                                <input className="conf-step__inputв" type="text"
                                       placeholder="Например, &laquo;Зал 1&raquo;" name="name" required/>
                            </label>
                            <div className="conf-step__buttons text-center">
                                <input type="submit" value="Добавить зал"
                                       className="conf-step__button conf-step__button-accent"/>
                                <button onClick={goBack} className="conf-step__button conf-step__button-regular">Отменить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
