import React from 'react';
import Section from '../Section'
import { useOpenHeader } from "../../../Hooks/openHeader.hook";

const Prices = () => {
    const { isActive, toggleActive } = useOpenHeader()

    return (
        <Section>
            <header onClick={toggleActive} className={`conf-step__header ${isActive ? 'conf-step__header_opened' : 'conf-step__header_closed'}`}>
                <h2 className="conf-step__title">Конфигурация цен</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
                <ul className="conf-step__selectors-box">
                    <li><input type="radio" className="conf-step__radio" name="prices-hall" value="Зал 1"/><span
                        className="conf-step__selector">Зал 1</span></li>
                    <li><input type="radio" className="conf-step__radio" name="prices-hall" value="Зал 2"
                               defaultChecked/><span className="conf-step__selector">Зал 2</span></li>
                </ul>

                <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Цена, рублей<input type="text"
                                                                           className="conf-step__input"
                                                                           placeholder="0"/></label> за <span
                    className="conf-step__chair conf-step__chair_standart"/> обычные кресла
                </div>
                <div className="conf-step__legend">
                    <label className="conf-step__label">Цена, рублей<input type="text"
                                                                           className="conf-step__input"
                                                                           placeholder="0"
                                                                           defaultValue="350"/></label> за <span
                    className="conf-step__chair conf-step__chair_vip"/> VIP кресла
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

export default Prices;
