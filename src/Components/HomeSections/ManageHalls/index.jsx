import React, {useEffect} from 'react';
import Section from "../Section";
import { useDispatch, useSelector } from "react-redux";
import { fetchHalls } from "../../../Store/reducers/ActionCreators";

const MyComponent = () => {
    const hallsState = useSelector(state => state.hallsReducer)
    const dispatch = useDispatch()
    const { loading, halls, error } = hallsState

    useEffect(() => {
        dispatch(fetchHalls())
    }, [dispatch])

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
                        .map(hall => <li>{hall.name} <button className="conf-step__button conf-step__button-trash"/></li>)}
                </ul>
                <button className="conf-step__button conf-step__button-accent">Создать зал</button>
            </div>
        </Section>
    );
};

export default MyComponent;
