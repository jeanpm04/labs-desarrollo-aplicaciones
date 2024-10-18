import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const { usuario, login, logout } = useContext(AuthContext);

  return (
    <div>
      {usuario ? (
        <>
          <h1>Bienvenido, {usuario.nombre}</h1>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <h1>No has iniciado sesión</h1>
          <button onClick={() => login('Juan')}>Iniciar Sesión</button>
        </>
      )}
    </div>
  );
};

export default Login;
