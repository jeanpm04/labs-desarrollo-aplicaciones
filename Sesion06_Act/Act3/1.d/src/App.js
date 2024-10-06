import './App.css';
import Header from './components/Header/Header'; // Importa el componente Header
import Footer from './components/Footer/Footer'; // Importa el componente Footer
import CarList from './components/CarList/CarList'; // Importa el componente CarList

function App() {
  const title = "Bienvenido a mi página con React"; // Título para el Header
  const footerMessage = "&copy; 2024 Mi Página. Todos los derechos reservados."; // Mensaje para el Footer

  // Arreglo de objetos que representan carros
  const cars = [
    { id: 1, make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { id: 2, make: "Honda", model: "Civic", year: 2019, price: 22000 },
    { id: 3, make: "Ford", model: "Mustang", year: 2021, price: 35000 },
    { id: 4, make: "Chevrolet", model: "Malibu", year: 2020, price: 23000 },
  ];

  return (
    <div className="App">
      <Header title={title} /> {/* Pasar el título como prop */}
      <div className="App-content">
        <CarList cars={cars} /> {/* Renderiza la lista de carros */}
      </div>
      <Footer message={footerMessage} /> {/* Pasar el mensaje como prop */}
    </div>
  );
}

export default App;
