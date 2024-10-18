import React from 'react';
import { CounterProvider } from './context/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

function App() {
  return (
    <CounterProvider>
      <div style={{ textAlign: 'center' }}>
        <h1>Contador con React Context</h1>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}

export default App;
