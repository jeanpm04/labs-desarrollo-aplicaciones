import React from 'react'
import {useState} from 'react'

const ContadorUseState = () => {
    const [contador, setContador] = useState(0);
  
    // Función para incrementar el contador
    const incrementar = () => {
        setContador(contador + 1);
    };
    const disminuir = () =>{
        setContador(contador - 1);
    }
  
    return (
      <div>
        <p>El contador es: {contador}</p>
        {/* Botón que cambia el estado */}
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={disminuir}>Disminuir</button>
      </div>
    );
};


export default ContadorUseState;