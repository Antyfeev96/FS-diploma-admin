import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Section from '../Section'
import {useOpenHeader} from "../../../Hooks/openHeader.hook";
import {setHallToConfigure, resetHallToConfigure, changePrice} from "../../../Store/reducers/HallToConfigureSlice";
import { updateHallPrices } from "../../../Store/reducers/ActionCreators";

const Prices = () => {
    const dispatch = useDispatch()
    const {isActive, toggleActive} = useOpenHeader()

    const {hall} = useSelector(state => state.hallToConfigureReducer)
    const hallsState = useSelector(state => state.hallsReducer)

    const [newPrices, setNewPrices] = useState({})


    useEffect(() => {
        setNewPrices(hall.prices)
    }, [hall.prices])

    const handleHallToConfigure = (hall) => {
        dispatch(setHallToConfigure(hall))
    }

    const handleChangePrice = (key, value) => {
        if (isNaN(value)) return;
        setNewPrices({
            ...newPrices,
            [key]: value
        })
    }

    const isSaveButtonActive = () => {
        return JSON.stringify(newPrices) === JSON.stringify(hall.prices)
    }

    const onSavePrices = () => {
        dispatch(updateHallPrices({ _id: hall._id, prices: newPrices}))
        dispatch(resetHallToConfigure())
        setNewPrices({})
    }

    return (
        <Section>
            <header onClick={toggleActive}
                    className={`conf-step__header ${isActive ? 'conf-step__header_opened' : 'conf-step__header_closed'}`}>
                <h2 className="conf-step__title">Конфигурация цен</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
                <ul className="conf-step__selectors-box">
                    {hallsState.halls.map(hall => <li key={hall.name}><input onClick={() => handleHallToConfigure(hall)} type="radio"
                                                             className="conf-step__radio"
                                                             name="prices-hall" value={hall.name}/><span
                        className="conf-step__selector">{hall.name}</span></li>)}
                </ul>

                <p className="conf-step__paragraph">{hall.prices ? 'Установите цены для типов кресел:' : 'Выберите зал для редактирования'}</p>
                {newPrices && Object.entries(newPrices).map(([key, value], index) => <div key={index} className="conf-step__legend">
                    <label className="conf-step__label">Цена, рублей<input type="text"
                                                                           onChange={(e) => handleChangePrice(key, +e.target.value)}
                                                                           className="conf-step__input"
                                                                           placeholder={value ?? 0}
                                                                           value={value}
                    /></label> за <span
                    className={`conf-step__chair conf-step__chair_${key}`}/> {key === 'standart' ? 'обычные' : 'VIP'} кресла
                </div>)}
                <fieldset className="conf-step__buttons text-center">
                    <button className="conf-step__button conf-step__button-regular">Отмена</button>
                    <input disabled={isSaveButtonActive()} onClick={onSavePrices} type="submit" value="Сохранить"
                           className="conf-step__button conf-step__button-accent"/>
                </fieldset>
            </div>
        </Section>
    );
};

export default Prices;
