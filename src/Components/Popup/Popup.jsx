import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import close from '../../Assets/close.png'
import {updateHall} from "../../Store/reducers/ActionCreators";

const Wrapper = styled.div`
    position: fixed;
    z-index: 9998;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
`

const ModalBody = styled.div`
    z-index: 9999;
    width: 400px;
    height: 200px;
    padding: 20px;
    background: rgba(255, 255, 255, 06);
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    > span {
        font-size: 20px;
        font-weight: 500;
    }
    
    > img {
        width: 20px;
        height: 20px;
        filter: brightness(0);
        transition: all 0.3s;
        
        :hover {
            cursor: pointer;
            filter: brightness(0.3);
            transform: scale(1.05);
        }
    }
`

const ModalContent = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const PlaceBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #848484;
    font-size: 1.4rem;
    
    > span:first-child:hover {
        cursor: pointer;
    }
    
    > span:last-child {
        margin-top: 10px;
    }
`

const placeClasses = [
    {
        class: 'conf-step__chair conf-step__chair_standart',
        status: 'standart',
        name: 'Обычное место'
    },
    {
        class: 'conf-step__chair conf-step__chair_vip',
        status: 'vip',
        name: 'VIP место'
    },
    {
        class: 'conf-step__chair conf-step__chair_disabled',
        status: 'disabled',
        name: 'Заблокированное место'
    }
]

const Popup = React.forwardRef(({ placeStatus, modelOpen, onPopupClose }, ref) => {
    const { placeToChange } = useSelector(state => state.placeToChangeReducer)
    const hallsState = useSelector(state => state.hallsReducer)
    const { halls } = hallsState
    const activeHall = useMemo(() => halls.find(hall => hall.checked), [halls])
    const dispatch = useDispatch()

    const onPatch = (status) => {
        dispatch(updateHall({ _id: activeHall._id, row: placeToChange.row, place: placeToChange.place, status }))
    }

    return (
        <Wrapper>
            <ModalBody ref={ref}>
                <ModalHeader>
                    <span>Выберите статус места</span>
                    <img onClick={onPopupClose} src={close} alt="close modal img"/>
                </ModalHeader>
                <ModalContent>
                    {placeClasses
                        .map(place => place.status !== placeStatus && <PlaceBlock key={place.status} onClick={() => onPatch(place.status)}>
                            <span className={place.class} />
                            <span>{place.name}</span>
                            </PlaceBlock>)}
                </ModalContent>
            </ModalBody>
        </Wrapper>
    );
});

export default Popup;
