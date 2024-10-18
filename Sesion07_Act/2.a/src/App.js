import React from 'react';
import { TemaProvider } from './context/TemaContext';
import { AuthProvider } from './context/AuthContext';
import CambiarTema from './components/CambiarTema';
import Login from './components/Login';

function App() {
  return (
    // Envolver la app con los providers de Tema y Auth
    <AuthProvider>
      <TemaProvider>
        <div className="App">
          {/* Componentes que consumen los contextos */}
          <CambiarTema />
          <Login />
        </div>
      </TemaProvider>
    </AuthProvider>
  );
}

export default App;
