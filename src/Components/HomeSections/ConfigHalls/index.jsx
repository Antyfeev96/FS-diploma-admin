import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

import Section from "../Section";
import Popup from "../../Popup/Popup";

import {useOpenHeader} from "../../../Hooks/openHeader.hook";
import {useModal} from "../../../Hooks/useModal";
import {useDisableScroll} from "../../../Hooks/useDisableScroll";
import {useOnClickOutside} from "../../../Hooks/useOnClickOutside";

import {setActiveHall, resetActiveHall} from "../../../Store/reducers/HallsSlice";
import {setPlaceToChange, resetPlaceToChange} from "../../../Store/reducers/PlaceToChangeSlice";
import { updateHallRows } from "../../../Store/reducers/ActionCreators";

const ConfigHalls = () => {
    const [rows, setRows] = useState(0)
    const [places, setPlaces] = useState(0)
    const ref = useRef()
    const [modalOpen, setModalOpen, toggle] = useModal(false)
    const hallsState = useSelector(state => state.hallsReducer)
    const { placeToChange } = useSelector(state => state.placeToChangeReducer)
    const dispatch = useDispatch()
    const { halls } = hallsState
    const {isActive, toggleActive} = useOpenHeader()

    const activeHall = useMemo(() => halls.find(hall => hall?.checked), [halls])

    const handleActiveHall = (hall) => {
        dispatch(resetActiveHall())
        dispatch(setActiveHall(hall))
    }

    const onPopupOpen = (rowIndex, place, placeIndex) => {
        toggle()
        dispatch(setPlaceToChange( {row: rowIndex, place: placeIndex, status: place}))
    }

    const onPopupClose = () => {
        dispatch(resetPlaceToChange())
        toggle()
    }

    // useEffect(() => {
    //     console.log({activeHall})
    // }, [activeHall])

    // useEffect(() => {
    //     console.log({placeToChange})
    // }, [placeToChange])

    useDisableScroll(modalOpen)
    useOnClickOutside(modalOpen, ref, onPopupClose)

    const validateChangeInput = (e) => {
        console.log({
            isNan: isNaN(+e.target.value),
            und: !e.target.value,
            empty: e.target.value === ''
        })
        return isNaN(+e.target.value) && e.target.value !== ''
    }

    const handleInputResult = (e) => {
        const value = +e.target.value.trim()
        if (value < 1) return ''
        if (value > 8) return 8
        return value
    }

    const handleSetRows = (e) => {
        if (validateChangeInput(e)) return;
        setRows(handleInputResult(e))
    }

    const handleSetPlaces = (e) => {
        if (validateChangeInput(e)) return;
        setPlaces(handleInputResult(e))
    }

    const onSaveChanges = () => {
        const rowsArray = Array(rows).fill(null).map(() => Array(places).fill('standart'))
        dispatch(updateHallRows({ _id: activeHall._id, rows:  rowsArray }))
    }

    return (
        <Section>
            {modalOpen && <Popup placeStatus={placeToChange.status} ref={ref} onClosePopup={onPopupClose}/>}
            <header onClick={toggleActive}
                    className={`conf-step__header ${isActive ? 'conf-step__header_opened' : 'conf-step__header_closed'}`}>
                <h2 className="conf-step__title">Конфигурация залов</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
                <ul className="conf-step__selectors-box">
                    {halls
                        .map(hall => <li key={hall.name}><input onChange={() => handleActiveHall(hall)}
                                                                type="radio" className="conf-step__radio"
                                                                name="chairs-hall"
                                                                value={hall.name}
                                                                defaultChecked={hall.checked}/><span
                            className="conf-step__selector">{hall.name}</span></li>)}
                </ul>
                <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в
                    ряду:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Рядов, шт<input onChange={handleSetRows} type="text" className="conf-step__input"
                                                                        placeholder={activeHall?.rows?.length} value={rows}/></label>
                    <span className="multiplier">x</span>
                    <label className="conf-step__label">Мест, шт<input onChange={handleSetPlaces} type="text" className="conf-step__input"
                                                                       placeholder={activeHall?.rows[0].length} value={places}/></label>
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
                        {activeHall?.rows
                            .map((row, rowIndex) => <div key={`row${rowIndex}`} className="conf-step__row">{row.map((place, placeIndex) =>
                                <span key={`place${placeIndex}`}
                                    onClick={() => onPopupOpen(rowIndex, place, placeIndex)} className={`conf-step__chair conf-step__chair_${place}`}/>)}</div>)}
                    </div>
                </div>

                <fieldset className="conf-step__buttons text-center">
                    <button className="conf-step__button conf-step__button-regular">Отмена</button>
                    <input onClick={onSaveChanges} type="submit" value="Сохранить"
                           className="conf-step__button conf-step__button-accent"/>
                </fieldset>
            </div>
        </Section>
    );
};

export default ConfigHalls;
