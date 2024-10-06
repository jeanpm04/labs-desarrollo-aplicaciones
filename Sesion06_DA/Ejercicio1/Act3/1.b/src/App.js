import './App.css';
import Header from './components/Header/Header'; // Importa el componente Header
import Footer from './components/Footer/Footer'; // Importa el componente Footer

function App() {
  const title = "Bienvenido a mi página con React"; // Título para el Header
  const footerMessage = "&copy; 2024 Mi Página. Todos los derechos reservados."; // Mensaje para el Footer

  return (
    <div className="App">
      <Header title={title} /> {/* Pasar el título como prop */}
      <div className="App-content">
        <h2>Contenido Principal Aquí</h2>
      </div>
      <Footer message={footerMessage} /> {/* Pasar el mensaje como prop */}
    </div>
  );
}

export default App;
