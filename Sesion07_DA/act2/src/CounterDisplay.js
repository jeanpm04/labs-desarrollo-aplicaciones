import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);
  return <h2>Valor del Contador: {count}</h2>;
};

export default CounterDisplay;
