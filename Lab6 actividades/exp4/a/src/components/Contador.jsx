import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    // Inicializamos el estado
    this.state = {contador: 0};
  }

  // Métodos para cambiar el estado
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  disminuir = () =>{
    this.setState({contador: this.state.contador -1});
  }

  render() {
    return (
      <div>
        <p>El contador es: {this.state.contador}</p>
        {/* Agregamos un botón para cambiar el estado */}
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.disminuir}>Disminuir</button>
      </div>
    );
  }
}

export default Contador;