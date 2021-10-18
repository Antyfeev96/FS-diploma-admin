import React from 'react';
import { useHttp } from "../Hooks/http.hook";

import Header from '../Components/Header'
import ManageHalls from '../Components/HomeSections/ManageHalls'
import ConfigHalls from '../Components/HomeSections/ConfigHalls'
import Prices from "../Components/HomeSections/Prices";
import Sessions from "../Components/HomeSections/Sessions";
import Sales from "../Components/HomeSections/Sales";

const HomePage = () => {

    const { loading, request, error } = useHttp()

    const getHallsHandler = async () => {
        try {
            const data = await request('/halls', 'GET')
            console.log('Halls: ', JSON.parse(data.halls))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Header/>
            <main className="conf-steps">
                <button onClick={getHallsHandler}/>
                <ManageHalls/>
                <ConfigHalls/>
                <Prices/>
                <Sessions/>
                <Sales/>
            </main>
        </div>
    );
};

export default HomePage;
