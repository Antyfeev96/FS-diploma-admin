import React, {useEffect} from 'react';
import Section from "../Section";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

const MyComponent = () => {
    const { path } = useRouteMatch();
    const hallsState = useSelector(state => state.hallsReducer)
    const { loading, halls, error } = hallsState

    return (
        <Section>
            <header className="conf-step__header conf-step__header_opened">
                <h2 className="conf-step__title">Управление залами</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Доступные залы:</p>
                <ul className="conf-step__list">
                    {loading && <h1>Идет загрузка...</h1>}
                    {error && <h1>{error}</h1>}
                    {halls
                        .map(hall => <li key={hall.name}>{hall.name} <button className="conf-step__button conf-step__button-trash"/></li>)}
                </ul>
                <Link to={`${path}/add_hall`}><button className="conf-step__button conf-step__button-accent">Создать зал</button></Link>
            </div>
        </Section>
    );
};

export default MyComponent;
