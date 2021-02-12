import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/aldeia_logo.jpg';

export default function Header() {
    const location=useLocation();
    const user = JSON.parse(localStorage.getItem('user'));
    const isAdmin = user ? user.categoria === 'admin' : false;

    return (
        <header className="cabecalho">
            <img src={logo} alt="logo" />
            <nav id="menu">
                <ul>
                    <li className={location.pathname==='/home'?'active':undefined}><Link to="/home">HOME</Link></li>
                    <li className={location.pathname==='/produtos'?'active':undefined}><Link to="/produtos">PRODUTOS</Link></li>
                    <li className={location.pathname==='/carrinho'?'active':undefined}><Link to="/carrinho">CARRINHO</Link></li>
                    { isAdmin ?  <li className={location.pathname==='/criar-produto'?'active':undefined}><Link to="/criar-produto">CADASTRAR PRODUTOS</Link></li> : '' }

                    { user ? '' : <li className={location.pathname==='/login'?'active':undefined}><Link to="/login">LOGIN</Link></li>}
            
                </ul>
            </nav>
        </header>
    )
}