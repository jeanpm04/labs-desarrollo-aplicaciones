import './App.css'; 
import { FaReact } from 'react-icons/fa';
import Header from './components/Header'; // Importa el componente Header
import Footer from './components/Footer'; // Importa el componente Footer

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <FaReact className="react-icon" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
