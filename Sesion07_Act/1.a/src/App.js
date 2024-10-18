import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Usuarios from './components/Usuarios';
import DetalleUsuario from './components/DetalleUsuario';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/usuarios" element={<Usuarios />}>
          {/* Ruta dinámica para el detalle del usuario */}
          <Route path=":usuarioId" element={<DetalleUsuario />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
