import './App.css';
import Header from './components/Header/Header'; // Importa el componente Header
import Footer from './components/Footer/Footer'; // Importa el componente Footer
import Timer from './components/Timer/Timer'; // Importa el nuevo componente Timer

function App() {
  const title = "Bienvenido a mi página con React"; // Título para el Header

  return (
    <div className="App">
      <Header title={title} /> {/* Pasar el título como prop */}
      <div className="App-content">
        <Timer /> {/* Renderiza el componente Timer */}
      </div>
      <Footer message="&copy; 2024 Mi Página." /> {/* Pasar el mensaje como prop */}
    </div>
  );
}

export default App;
