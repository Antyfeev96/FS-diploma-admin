import React from 'react';
import Section from "../Section";

const MyComponent = () => {
    return (
        <Section>
            <header className="conf-step__header conf-step__header_opened">
                <h2 className="conf-step__title">Управление залами</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">Доступные залы:</p>
                <ul className="conf-step__list">
                    <li>Зал 1 <button className="conf-step__button conf-step__button-trash"/>
                    </li>
                    <li>Зал 2 <button className="conf-step__button conf-step__button-trash"/>
                    </li>
                </ul>
                <button className="conf-step__button conf-step__button-accent">Создать зал</button>
            </div>
        </Section>
    );
};

export default MyComponent;
