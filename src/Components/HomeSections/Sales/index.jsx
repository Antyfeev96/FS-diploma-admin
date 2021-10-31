import React from 'react';
import Section from '../Section'
import { useOpenHeader } from "../../../Hooks/openHeader.hook";

const Sales = () => {
    const { isActive, toggleActive } = useOpenHeader()

    return (
        <Section>
            <header onClick={toggleActive} className={`conf-step__header ${isActive ? 'conf-step__header_opened' : 'conf-step__header_closed'}`}>
                <h2 className="conf-step__title">Открыть продажи</h2>
            </header>
            <div className="conf-step__wrapper text-center">
                <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
                <button className="conf-step__button conf-step__button-accent">Открыть продажу билетов</button>
            </div>
        </Section>
    );
};

export default Sales;
