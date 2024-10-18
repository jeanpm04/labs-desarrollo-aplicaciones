import React, { createContext, useState } from 'react';

// Crear el contexto del contador
export const CounterContext = createContext();

// Proveedor del contexto del contador
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}
