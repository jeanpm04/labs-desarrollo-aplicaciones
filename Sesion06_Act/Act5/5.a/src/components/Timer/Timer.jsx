import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(0); // Estado para los segundos

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1); // Incrementa el contador cada segundo
    }, 1000);

    // Cleanup function para limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []); // El arreglo vacío significa que se ejecuta solo una vez al montar

  return (
    <div className="timer">
      <h2>Segundos transcurridos: {seconds}</h2>
    </div>
  );
}

export default Timer;
