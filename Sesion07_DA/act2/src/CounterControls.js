import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterControls = () => {
  const { increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default CounterControls;
