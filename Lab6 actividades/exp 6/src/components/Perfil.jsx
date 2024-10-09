import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Perfil = () => {
  return (
    <div>
      <h2>Página de Perfil</h2>
      {/* Enlaces a las rutas anidadas */}
      <ul>
        <li><Link to="/perfil/info">Información del Perfil</Link></li>
        <li><Link to="/perfil/settings">Configuración</Link></li>
      </ul>

      {/* Rutas anidadas */}
      <Route path="/perfil/info" component={InfoPerfil} />
      <Route path="/perfil/settings" component={Configuracion} />

    </div>
  );
};

// Subcomponentes que se mostrarán según la subruta
const InfoPerfil = () => <h3>Esta es la información del perfil</h3>;
const Configuracion = () => <h3>Configuración del perfil</h3>;

export default Perfil;