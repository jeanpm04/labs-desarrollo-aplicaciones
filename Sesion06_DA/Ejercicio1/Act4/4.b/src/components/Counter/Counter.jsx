import React, { useState } from 'react';
import './Counter.css'; // Importa el CSS específico para el Counter

function Counter() {
  const [count, setCount] = useState(0); // Estado inicial

  // Función para incrementar el contador
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h2>Contador: {count}</h2>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default Counter;
