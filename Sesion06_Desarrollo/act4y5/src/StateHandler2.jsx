import React, { useState } from 'react';

const StateHandler = () => {
  const [currentState, setCurrentState] = useState('Estado 1');

  const changeState = () => {
    setCurrentState(currentState === 'Estado 1' ? 'Estado 2' : 'Estado 1');
  };

  return (
    <div>
      <h1>Estado Actual: {currentState}</h1>
      <button onClick={changeState}>Cambiar Estado</button>
    </div>
  );
};

export default StateHandler;
