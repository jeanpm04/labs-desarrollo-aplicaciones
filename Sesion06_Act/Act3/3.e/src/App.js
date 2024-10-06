import './App.css';
import Header from './components/Header/Header'; // Importa el componente Header
import Footer from './components/Footer/Footer'; // Importa el componente Footer
import { useState } from 'react'; // Importa useState para manejar el estado

function App() {
  const title = "Bienvenido a mi página con React"; // Título para el Header

  // Estado para manejar el mensaje
  const [message, setMessage] = useState('');

  // Funciones para manejar eventos de los botones
  const handleShowHello = () => {
    setMessage("¡Hola! Has presionado el botón.");
  };

  const handleShowGoodbye = () => {
    setMessage("¡Adiós! Has presionado el otro botón.");
  };

  return (
    <div className="App">
      <Header title={title} /> {/* Pasar el título como prop */}
      <div className="App-content">
        {/* Agregar botones */}
        <div className="button-container">
          <button onClick={handleShowHello}>Mostrar Hola</button>
          <button onClick={handleShowGoodbye}>Mostrar Adiós</button>
        </div>

        {/* Mostrar el mensaje */}
        {message && <p>{message}</p>}
      </div>
      <Footer message="&copy; 2024 Mi Página." /> {/* Pasar el mensaje como prop */}
    </div>
  );
}

export default App;
