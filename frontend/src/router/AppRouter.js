import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import Subscribe from "../subscriber/Subscribe";
import Login from "../admin/Login";
import Admin from "../admin/Admin";

function AppRouter(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Subscribe}/>
                <Route exact path='/login' component={Login}/>
                <PrivateRoute exact path='/admin' component={Admin}/>
            </Switch>
        </BrowserRouter>
    );

}

export default AppRouter;