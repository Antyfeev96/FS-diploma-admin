import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Section from "../Section";
import nevskii from "../../../Assets/nevskii.jpg";
import {useOpenHeader} from "../../../Hooks/openHeader.hook";
import {fetchFilms} from "../../../Store/reducers/FilmsSlice";

const Sessions = () => {
    const dispatch = useDispatch()
    const {isActive, toggleActive} = useOpenHeader()
    const {films} = useSelector(state => state.filmsState)
    const {path} = useRouteMatch();

    const [currentFilm, setCurrentFilm] = useState(null)

    useEffect(() => {
        dispatch(fetchFilms())
    }, [dispatch])

    const dragStartHandler = (e, film) => {
        // console.log(film)
    }

    const dragEnterHandler = (e) => {
        // console.log(e)
    }

    const dragEndHandler = (e) => {
        const target = document.elementFromPoint(e.clientX, e.clientY)
        const hall = target.closest('.conf-step__seances-hall')
        if (!hall) return;
        console.log(hall)
        // hall.style.backgroundColor = 'red'
    }

    const mouseOverHandler = (e) => {
        const hall = e.target.closest('.conf-step__seances-timeline')
        if (!hall) return
        console.log('drag')
        // hall.style.backgroundColor = 'grey'
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
                            onDragEnter={(e) => dragEnterHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dragEndHandler(e)}
                            onDragOver={(e) => mouseOverHandler(e)}
                            className="conf-step__movie"
                        >
                            <img className="conf-step__movie-poster" alt="poster" src={nevskii}/>
                            <h3 className="conf-step__movie-title">{film.name}</h3>
                            <p className="conf-step__movie-duration">{film.duration} минут</p>
                        </div>)}
                </div>

                <div className="conf-step__seances">
                    <div className="conf-step__seances-hall" onDragOver={(e) => mouseOverHandler(e)}>
                        <h3 className="conf-step__seances-title">Зал 1</h3>
                        <div className="conf-step__seances-timeline">
                            <div className="conf-step__seances-movie"
                                 style={{
                                     "width": "60px",
                                     "backgroundColor": "rgb(133, 255, 137)",
                                     "left": "0"
                                 }}>
                                <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                                <p className="conf-step__seances-movie-start">00:00</p>
                            </div>
                            <div className="conf-step__seances-movie"
                                 style={{
                                     "width": "60px",
                                     "backgroundColor": "rgb(133, 255, 137)",
                                     "left": "360px"
                                 }}>
                                <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                                <p className="conf-step__seances-movie-start">12:00</p>
                            </div>
                            <div className="conf-step__seances-movie"
                                 style={{
                                     "width": "65px",
                                     "backgroundColor": "rgb(202, 255, 133)",
                                     "left": "420px"
                                 }}>
                                <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака
                                    клонированных клонов</p>
                                <p className="conf-step__seances-movie-start">14:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="conf-step__seances-hall">
                        <h3 className="conf-step__seances-title">Зал 2</h3>
                        <div className="conf-step__seances-timeline">
                            <div className="conf-step__seances-movie"
                                 style={{
                                     "width": "65px",
                                     "backgroundColor": "rgb(202, 255, 133)",
                                     "left": "595px"
                                 }}>
                                <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака
                                    клонированных клонов</p>
                                <p className="conf-step__seances-movie-start">19:50</p>
                            </div>
                            <div className="conf-step__seances-movie"
                                 style={{
                                     "width": "60px",
                                     "backgroundColor": "rgb(133, 255, 137)",
                                     "left": "660px"
                                 }}>
                                <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                                <p className="conf-step__seances-movie-start">22:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <fieldset className="conf-step__buttons text-center">
                    <button className="conf-step__button conf-step__button-regular">Отмена</button>
                    <Link to={`${path}/add_session`}>
                        <input type="submit" value="Сохранить"
                           className="conf-step__button conf-step__button-accent"/>
                    </Link>
                </fieldset>
            </div>
        </Section>
    );
};

export default Sessions;
