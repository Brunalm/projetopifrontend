import React from 'react';

import './App.css';
import Header from './components/Header';

//contexto de autenticação
//contexto = estado compartilhado com componentes filhos 
import { AuthProvider } from './contexts/auth';

import Routes from './routes';

function App() {

  return (
    <AuthProvider>
      <Header />
      <Routes />
    </AuthProvider>
  );
}

export default App;
