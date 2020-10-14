import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button type="submit">Logar</button>
            </form>
        </div>
    )
}