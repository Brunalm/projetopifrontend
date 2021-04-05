import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/aldeia_logo.jpg';
import { useAuth } from '../../contexts/auth';

export default function Header() {
    const location=useLocation();
    const { user, logout } = useAuth();
    const isAdmin = user ? user.categoria === 'admin' : false;

    return (
        <header className="cabecalho">
            <img src={logo} alt="logo" />
            <nav id="menu">
                <ul>
                    <li className={location.pathname==='/home'?'active':undefined}><Link to="/home">HOME</Link></li>
                    <li className={location.pathname.includes('/produtos')?'active':undefined}><Link to="/produtos">PRODUTOS</Link></li>
                    <li className={location.pathname==='/carrinho'?'active':undefined}><Link to="/carrinho">CARRINHO</Link></li>
                    { isAdmin ?  <li className={location.pathname==='/criar-produto'?'active':undefined}><Link to="/criar-produto">CADASTRAR PRODUTOS</Link></li> : '' }

                    { !user && <li className={location.pathname==='/login'?'active':undefined}><Link to="/login">LOGIN</Link></li>}
                    { user && <li><button type="button" onClick={logout}>SAIR</button></li> }
            
                </ul>
            </nav>
        </header>
    )
}