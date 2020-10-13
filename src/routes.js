import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import New from './pages/New';

export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/produtos" component={New}/>
        </Switch>
        </BrowserRouter>
    );
}