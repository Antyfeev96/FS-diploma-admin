import React, {useEffect} from 'react';

import Loader from '../Components/Loader'
import Header from '../Components/Header'
import ManageHalls from '../Components/HomeSections/ManageHalls'
import ConfigHalls from '../Components/HomeSections/ConfigHalls'
import Prices from "../Components/HomeSections/Prices";
import Sessions from "../Components/HomeSections/Sessions";
import Sales from "../Components/HomeSections/Sales";
import {useDispatch, useSelector} from "react-redux";
import {fetchHalls} from "../Store/reducers/ActionCreators";

const HomePage = () => {
    const hallsState = useSelector(state => state.hallsReducer)
    const dispatch = useDispatch()
    const {loading, halls, error} = hallsState

    useEffect(() => {
        if (halls.length === 0) {
            dispatch(fetchHalls())
        }
    }, [dispatch])

    return (
        <>
            {loading && <Loader/>}
            {halls.length > 0 &&
            <div>
                <Header/>
                <main className="conf-steps">
                    <ManageHalls/>
                    <ConfigHalls/>
                    <Prices/>
                    <Sessions/>
                    <Sales/>
                </main>
            </div>}
        </>
    );
};

export default HomePage;
