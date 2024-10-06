import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Estado inicial
    };
  }

  // Método para incrementar el contador
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter">
        <h2>Contador: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;
