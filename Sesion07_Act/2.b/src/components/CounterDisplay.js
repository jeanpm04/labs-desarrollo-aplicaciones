import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h2>Valor actual del contador: {count}</h2>
    </div>
  );
}

export default CounterDisplay;
