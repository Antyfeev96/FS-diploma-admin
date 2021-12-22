import React, {useEffect, useState} from 'react';
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Section from "../Section";
import nevskii from "../../../Assets/nevskii.jpg";
import {useOpenHeader} from "../../../Hooks/openHeader.hook";
import {fetchFilms} from "../../../Store/reducers/FilmsSlice";
import { setSessionHall, setSessionFilm, setSessionTime } from "../../../Store/reducers/NewSessionSlice";

const Sessions = () => {
    const dispatch = useDispatch()
    const {isActive, toggleActive} = useOpenHeader()
    const {films} = useSelector(state => state.filmsState)
    const {halls} = useSelector(state => state.hallsReducer)
    const { session } = useSelector(state => state.newSessionState)
    const {path} = useRouteMatch();
    const history = useHistory()

    const [currentFilm, setCurrentFilm] = useState(null)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])

    const dragStartHandler = (e, film) => {
        console.log({film})
        dispatch(setSessionFilm(film.name))
    }

    // const dragEndHandler = (e, film) => {
    //     const target = document.elementFromPoint(e.clientX, e.clientY)
    //     const hall = target.closest('.conf-step__seances-hall')
    //     if (!hall) return console.log('out of element');
    //     hall.style.backgroundColor = 'transparent'
    //     // history.push(`${path}/add_session`)
    // }

    const dropHandler = (e, hall) => {
        const hallNode = e.target.closest('.conf-step__seances-timeline')
        if (!hallNode) return console.log('Сюда нельзя сделать drop')
        console.log({hall})
        dispatch(setSessionHall(hall.name))
        hallNode.style.backgroundColor = 'transparent'
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
        const hall = e.target.closest('.conf-step__seances-timeline')
        if (!hall) return
        console.log('dragOver')
        hall.style.backgroundColor = '#b0b0b1'
    }

    const dragLeaveHandler = (e) => {
        const hall = e.target.closest('.conf-step__seances-timeline')
        if (!hall) return
        console.log('dragLeave')
        hall.style.backgroundColor = 'transparent'
    }

    const getPosition = (time) => {
        const number = +time.split(':')[0]
        switch (number) {
            case 8:
                return '0'
            case 10:
                return '82';
            case 12:
                return '164';
            case 14:
                return '246';
            case 16:
                return '328';
            case 18:
                return '410';
            case 20:
                return '492';
            case 22:
                return '574';
            case 0:
                return '660';
        }
    }

    return (
        <Section>
            <header onClick={toggleActive}
                    className={`conf-step__header ${isActive ? 'conf-step__header_opened' : 'conf-step__header_closed'}`}>
                <h2 className="conf-step__title">Сетка сеансов</h2>
            </header>
            <div className="conf-step__wrapper">
                <p className="conf-step__paragraph">
                    <Link to={`${path}/add_film`}>
                        <button className="conf-step__button conf-step__button-accent">Добавить фильм</button>
                    </Link>
                </p>
                <div className="conf-step__movies">
                    {films.map((film) =>
                        <div
                            draggable={true}
                            onDragStart={(e) => dragStartHandler(e, film)}
                            // onDragEnd={(e) => dragEndHandler(e, film)}
                            className="conf-step__movie"
                        >
                            <img className="conf-step__movie-poster" alt="poster" src={nevskii}/>
                            <h3 className="conf-step__movie-title">{film.name}</h3>
                            <p className="conf-step__movie-duration">{film.duration} минут</p>
                        </div>)}
                </div>
                <div className="conf-step__seances">
                    {halls.map(hall =>
                        <div className="conf-step__seances-hall"
                             onDragOver={(e) => dragOverHandler(e)}
                             onDragLeave={(e) => dragLeaveHandler(e)}
                             onDrop={(e) => dropHandler(e, hall)}
                        >
                            <h3 className="conf-step__seances-title">{hall.name}</h3>
                            <div className="conf-step__seances-timeline">
                                {Object.entries(hall.sessions)
                                    .filter(([key, value]) => value !== '')
                                    .map(([key, value]) =>
                                        <div className="conf-step__seances-movie"
                                             style={{
                                                 "width": "60px",
                                                 "backgroundColor": "rgb(133, 255, 137)",
                                                 "left": `${getPosition(key)}px`
                                             }}>
                                            <p className="conf-step__seances-movie-title">{value}</p>
                                            <p className="conf-step__seances-movie-start">{key}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>)}
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

export default Sessions;
