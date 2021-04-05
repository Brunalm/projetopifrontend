import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import PrivateRoute from './components/PrivateRoute';

import Login from './pages/Login';
import Produto from './pages/Produto';
import CriarUsuario from './pages/CriarUsuario';
import DetalhesProduto from './pages/DetalhesProduto';
import NovoProduto from './pages/NovoProduto';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import FinalizarCompra from './pages/FinalizarCompra';

export default function Routes() {
    return (
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/criar-usuario" component={CriarUsuario} />
                <Route path="/produtos" exact component={Produto} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/produtos/:id" component={DetalhesProduto} />
                <PrivateRoute path="/finalizar-compra" component={FinalizarCompra} />
                <PrivateRoute path="/criar-produto" component={NovoProduto} />
            </Switch>
        <Footer />
        </BrowserRouter>
    );
}