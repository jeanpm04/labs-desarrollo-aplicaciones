import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function CounterButtons() {
  const { increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default CounterButtons;
