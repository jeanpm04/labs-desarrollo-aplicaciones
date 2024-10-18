import React from 'react';
import { useParams } from 'react-router-dom';

function DetallesProducto() {
  const { id } = useParams(); // Obtener el parámetro 'id' de la URL
  return <h2>Detalles del Producto {id}</h2>;
}

export default DetallesProducto;
