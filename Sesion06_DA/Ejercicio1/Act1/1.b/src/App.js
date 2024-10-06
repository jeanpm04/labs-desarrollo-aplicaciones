import './App.css';
import { FaReact } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FaReact className="react-icon" />
        <h1>Bienvenido a mi página con React</h1>
        <p>Página para aprender sobre React y sus características.</p>
        <a href="https://reactjs.org/" target="_blank">
          Aprende más sobre React <FiExternalLink />
        </a>
      </header>
    </div>
  );
}

export default App;
