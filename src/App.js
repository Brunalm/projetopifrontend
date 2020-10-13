import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/login', {
      nome,
      sobrenome,
      email,
      senha
    });

    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnc" />

    <div className="content">
      <p>
        Criar uma nova conta
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">NOME *</label>
        <input 
        type="nome" id="nome" 
        placeholder="Digite seu nome" 
        value={nome}
        onChange={event => setNome(event.target.value)}
        />
        
        <label htmlFor="sobrenome">SOBRENOME</label>
        <input 
        type="sobrenome" id="sobrenome" 
        placeholder="Digite seu sobrenome" 
        value={sobrenome}
        onChange={event => setSobrenome(event.target.value)}
        />
        
        <label htmlFor="email">E-MAIL *</label>
        <input 
        type="email" id="email" 
        placeholder="Seu melhor e-mail" 
        value={email}
        onChange={event => setEmail(event.target.value)} 
        />

        <label htmlFor="senha">SENHA *</label>
        <input type="senha" id="senha"
         placeholder="Escolha uma senha" 
         value={senha}
         onChange={event => setSenha(event.target.value)}
         />

        <button className="btn" type="submit">Criar Conta</button>
      </form>
    </div>
    </div>
  );
}

export default App;
