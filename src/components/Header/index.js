import React from 'react';

import './styles.css';

import logo from '../../assets/aldeia_logo.jpg';

export default function Header() {
    return (
        <header className="cabecalho">
            <hgroup>
                <img src={logo} alt="logo" />
                <nav id="menu">
                    <ul>
                        <li>HOME</li>
                        <li>PRODUTOS</li>
                        <li>QUEM SOMOS</li>
                        <li>CONTATO</li>
                    </ul>
                </nav>
            </hgroup>
        </header>
    )
}