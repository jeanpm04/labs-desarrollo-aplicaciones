import React, { useState, useEffect } from 'react';

const ContadorUseEffect = () => {

  const [conta, setContador] = useState(0);

  // Efecto secundario: se ejecuta después de cada render
  useEffect(() => {
    document.title = `El contador es: ${conta}`;
    console.log("El componente se ha renderizado o el contador ha cambiado");

    // Opcional: limpieza del efecto
    return () => {
      console.log("Limpieza del efecto");
    };
  }, [conta]); // Se ejecuta solo cuando 'contador' cambia

  const incrementar = () => {
    setContador(conta + 1);
  };
  const disminuir = () =>{
    setContador(conta - 1);
}

  return (
    <div>
      <p>El contador es: {conta}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default ContadorUseEffect;
