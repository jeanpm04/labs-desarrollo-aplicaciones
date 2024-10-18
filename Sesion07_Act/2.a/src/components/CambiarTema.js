import React, { useContext } from 'react';
import TemaContext from '../context/TemaContext';

const CambiarTema = () => {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <div style={{ background: tema === 'claro' ? '#fff' : '#333', color: tema === 'claro' ? '#000' : '#fff' }}>
      <h1>Tema actual: {tema}</h1>
      <button onClick={toggleTema}>Cambiar Tema</button>
    </div>
  );
};

export default CambiarTema;
