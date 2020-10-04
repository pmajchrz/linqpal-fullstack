import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import {getToken} from "./../admin/redux/selectors";

function PrivateRoute(rest) {
    const {token: storeToken, component: Component} = rest;

    return (
        storeToken ?
            <Route {...rest} component={Component}/>
            :
            <Redirect to='/login'/>
    );
}

export default connect(state => ({token: getToken(state)}), null)(PrivateRoute);