import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './pages/Login';
import Produto from './pages/Produto';
import CriarUsuario from './pages/CriarUsuario';
import DetalhesProduto from './pages/DetalhesProduto';
import NovoProduto from './pages/NovoProduto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/criar-usuario" component={CriarUsuario} />
                <Route path="/produtos" exact component={Produto} />
                <Route path="/produtos/:id" component={DetalhesProduto} />
                <PrivateRoute path="/criar-produto" component={NovoProduto} />
            </Switch>
        </BrowserRouter>
    );
}