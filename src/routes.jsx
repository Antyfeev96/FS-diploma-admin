import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <HomePage/>
                </Route>
                <Route path='/hello' exact>
                    <div>Hello</div>
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