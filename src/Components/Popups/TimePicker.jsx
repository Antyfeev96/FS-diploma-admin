import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Select = styled.select`
  display: flex;
  width: 100%;
  padding: 8px;
  background-color: white;
  
  :focus-visible {
    outline: none;
  }
`

const times = {
    '10:00': '',
    '12:00': 'dfghjkl132fgd34234',
    '14:00': '',
    '16:00': '',
    '18:00': '',
    '20:00': 'dfghjkl11кыпвапвап4534',
    '22:00': '',
}

function TimePicker() {
    const [option, setOption] = useState('10:00')

    return (
        <>
            <label className="conf-step__label conf-step__label-fullsize">
                Время начала
                <Select onChange={(e) => setOption(e.target.value)}>
                    {Object.entries(times)
                        .filter(([key, value]) => value === '')
                        .map(([key, value]) =>
                            <option key={key} selected={value === option}>{key}</option>
                        )}
                </Select>
            </label>
            <h2>Вы добавляете фильм "Московская жара"</h2>
        </>
    );
}

export default TimePicker;
