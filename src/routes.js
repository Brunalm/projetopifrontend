import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Produto from './pages/Produto';
import CriarUsuario from './pages/CriarUsuario';
import DetalhesProduto from './pages/DetalhesProduto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/criar-usuario" component={CriarUsuario} />
                <Route path="/produtos" exact component={Produto} />
                <Route path="/produtos/:id" component={DetalhesProduto}/>
            </Switch>
        </BrowserRouter>
    );
}