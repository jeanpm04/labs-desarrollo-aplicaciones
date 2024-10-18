import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Usuarios = () => {
  const usuarios = [
    { id: 1, nombre: 'Andrés' },
    { id: 2, nombre: 'Eric' }
  ];

  return (
    <div>
      <h1>Página de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <Link to={`/usuarios/${usuario.id}`}>{usuario.nombre}</Link>
          </li>
        ))}
      </ul>
      <Outlet /> {/* Aquí se mostrarán las rutas anidadas */}
    </div>
  );
};

export default Usuarios;
