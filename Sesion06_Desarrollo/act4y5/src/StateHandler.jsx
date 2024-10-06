import React from 'react';

class StateHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 'Estado 1: Texto De Prueba Para el Estado 1 WOW',
    };
  }

  changeState = () => {
    const { currentState } = this.state;
    this.setState({
      currentState: currentState === 'Estado 1: Texto De Prueba Para el Estado 1 WOW' ? 'ESTADO 2: INCREIBLE' : 'Estado 1: Texto De Prueba Para el Estado 1 WOW',
    });
  };

  render() {
    return (
      <div>
        <h1>Estado Actual: {this.state.currentState}</h1>
        <button onClick={this.changeState}>Cambiar Estado</button>
      </div>
    );
  }
}

export default StateHandler;
