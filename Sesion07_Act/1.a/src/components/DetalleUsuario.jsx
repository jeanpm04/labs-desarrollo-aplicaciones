import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleUsuario = () => {
  const { usuarioId } = useParams();
  
  return (
    <div>
      <h2>Detalle del Usuario</h2>
      <p>Mostrando detalles para el usuario con ID: {usuarioId}</p>
    </div>
  );
};

export default DetalleUsuario;
