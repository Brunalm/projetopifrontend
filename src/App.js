import React from 'react';

import './App.css';

//contexto de autenticação
//contexto = estado compartilhado com componentes filhos 
import { AuthProvider } from './contexts/auth';

import Routes from './routes';

function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
