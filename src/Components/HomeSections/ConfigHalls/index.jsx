import React, {useEffect, useRef, useState} from 'react';
import Section from "../Section";
import {useSelector, useDispatch} from "react-redux";
import {setActiveHall, resetActiveHall} from "../../../Store/reducers/HallsSlice";
import {useOpenHeader} from "../../../Hooks/openHeader.hook";

const ConfigHalls = () => {
    const Ref = useRef()
    const dispatch = useDispatch()
    const hallsState = useSelector(state => state.hallsReducer)
    const {isActive, toggleActive} = useOpenHeader()
    const {halls} = hallsState

    const activeHall = halls.find(hall => hall.checked)

    const handleActiveHall = (hall) => {
        dispatch(resetActiveHall())
        dispatch(setActiveHall(hall))
    }

    return (
        <Section>
            <header onClick={toggleActive}
                    className={`conf-step__header ${isActive ? 'conf-step__header_opened' : 'conf-step__header_closed'}`}>
                <h2 className="conf-step__title">Конфигурация залов</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
                <ul className="conf-step__selectors-box">
                    {halls
                        .map(hall => <li key={hall.name}><input ref={Ref} onChange={() => handleActiveHall(hall)}
                                                                type="radio" className="conf-step__radio"
                                                                name="chairs-hall"
                                                                value={hall.name}
                                                                defaultChecked={hall.checked}/><span
                            className="conf-step__selector">{hall.name}</span></li>)}
                </ul>
                <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в
                    ряду:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Рядов, шт<input type="text" className="conf-step__input"
                                                                        placeholder={activeHall.rows.length}/></label>
                    <span className="multiplier">x</span>
                    <label className="conf-step__label">Мест, шт<input type="text" className="conf-step__input"
                                                                       placeholder={activeHall.rows[0].length}/></label>
                </div>
                <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
                <div className="conf-step__legend">
                    <span className="conf-step__chair conf-step__chair_standart"/> — обычные кресла
                    <span className="conf-step__chair conf-step__chair_vip"/> — VIP кресла
                    <span className="conf-step__chair conf-step__chair_disabled"/> — заблокированные (нет
                    кресла)
                    <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой
                        мыши</p>
                </div>

                <div className="conf-step__hall">
                    <div className="conf-step__hall-wrapper">
                        {activeHall.rows
                            .map(row => <div className="conf-step__row">{row.map(place => <span
                                className={`conf-step__chair conf-step__chair_${place}`}/>)}</div>)}
                    </div>
                </div>

                <fieldset className="conf-step__buttons text-center">
                    <button className="conf-step__button conf-step__button-regular">Отмена</button>
                    <input type="submit" value="Сохранить"
                           className="conf-step__button conf-step__button-accent"/>
                </fieldset>
            </div>
        </Section>
    );
};

export default ConfigHalls;
