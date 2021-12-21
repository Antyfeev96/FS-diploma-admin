import React from 'react';

function TimePicker() {
    return (
        <>
            <label className="conf-step__label conf-step__label-fullsize">
                Время начала
                <input className="conf-step__input" type="time" required/>
            </label>
            <h2>Вы добавляете фильм "Московская жара"</h2>
        </>
    );
}

export default TimePicker;
