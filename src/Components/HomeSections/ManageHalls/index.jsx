import React from 'react';
import Section from "../Section";
import {useDispatch, useSelector} from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { useOpenHeader } from "../../../Hooks/openHeader.hook";
import { deleteHall } from "../../../Store/reducers/HallsSlice";

const ManageHalls = () => {
    const { isActive, toggleActive } = useOpenHeader()
    const { path } = useRouteMatch();
    const hallsState = useSelector(state => state.hallsReducer)
    const dispatch = useDispatch()
    const { loading, halls, error } = hallsState

    const onDelete = (_id) => {
        dispatch(deleteHall(_id))
    }

    return (
        <Section>
            <header onClick={toggleActive} className={`conf-step__header ${isActive ? 'conf-step__header_opened' : 'conf-step__header_closed'}`}>
                <h2 className="conf-step__title">Управление залами</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Доступные залы:</p>
                <ul className="conf-step__list">
                    {halls.length === 0 && <h1>Список залов пуст</h1>}
                    {loading && <h1>Идет загрузка...</h1>}
                    {error && <h1>{error}</h1>}
                    {halls
                        .map(hall => <li key={hall.name}>{hall.name} <button onClick={() => onDelete(hall._id)} className="conf-step__button conf-step__button-trash"/></li>)}
                </ul>
                <Link to={`${path}/add_hall`}><button className="conf-step__button conf-step__button-accent">Создать зал</button></Link>
            </div>
        </Section>
    );
};

export default ManageHalls;
