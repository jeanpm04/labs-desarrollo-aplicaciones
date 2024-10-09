import logo from './logo.svg';
import './App.css';
import ContadorUseEffect from './ContadorUseEffect';
import Navbar from './Navbar';
import PruebasHooks from './PruebasHooks';

function App() {
  return (
    <div className="App">
      <ContadorUseEffect />
      <Navbar />
      <PruebasHooks />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
