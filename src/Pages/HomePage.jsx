import React from 'react';

import Header from '../Components/Header'
import ManageHalls from '../Components/HomeSections/ManageHalls'
import ConfigHalls from '../Components/HomeSections/ConfigHalls'
import Prices from "../Components/HomeSections/Prices";
import Sessions from "../Components/HomeSections/Sessions";
import Sales from "../Components/HomeSections/Sales";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <main className="conf-steps">
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
