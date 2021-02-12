import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { user, login } = useAuth();

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/login', { email, senha });

        if (!response.data) {
            alert('Erro ao fazer login');
        } else {
            login(response.data.usuario, response.data.token);
        }

    }

    useEffect(() => {
        if (user !== null) {
            history.push('/produtos');
        }
    }, [user, history]);

    return (
        <div className="login-container">

        <div className="login-content">
        <p>
          <b>Entrar na conta</b>
        </p>

        <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
          <input
            type="email" id="email"
            required="required"
            autoFocus="autofocus"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="senha">SENHA *</label>
          <input 
            type="password" id="senha"
            required="required"
            placeholder="Digite sua senha"
            value={senha}
            onChange={event => setSenha(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
          <Link to="/criar-usuario"><button className="btn">Cadastre-se</button></Link>
        </form>
      </div>
    </div>

    )
}