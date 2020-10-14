import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import New from './pages/New';
import CriarUsuario from './pages/CriarUsuario';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/criar-usuario" component={CriarUsuario} />
                <Route path="/produtos" component={New} />
            </Switch>
        </BrowserRouter>
    );
}