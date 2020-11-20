import React, { useState } from 'react';

import './styles.css';

import api from '../../services/api';

function CriarUsuario() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/usuarios', {
      nome,
      sobrenome,
      email,
      senha
    });

    console.log(response);
  }

  return (
    <div className="usuario-container">
      <div className="usuario-content">
        <p>
          Criar uma nova conta
      </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">NOME *</label>
          <input
            type="nome" id="nome"
            required="required"
            autoFocus="autofocus"
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
            required="required"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="senha">SENHA *</label>
          <input 
            type="password" id="senha"
            required="required"
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

export default CriarUsuario;