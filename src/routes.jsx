import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import AddHall from './Components/Popups/AddHall'
import AddFilm from './Components/Popups/AddFilm'
import AddSession from './Components/Popups/AddSession'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <HomePage/>
                </Route>
                <Route path='/home/add_hall' exact>
                    <AddHall/>
                </Route>
                <Route path='/home/add_film' exact>
                    <AddFilm/>
                </Route>
                <Route path='/home/add_session' exact>
                    <AddSession/>
                </Route>
                <Redirect to='/home'/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/login' exact>
                <LoginPage/>
            </Route>
            <Redirect to='/login'/>
        </Switch>
    )
}
