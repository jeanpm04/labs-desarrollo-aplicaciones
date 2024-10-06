import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi primera página con React</h1>
        <p>Página con enlaces externos</p>
        <ul>
          <li>
            <a href='https://www.google.com' target='_blank'>Enlace a Google</a>
          </li>
          <li>
            <a href='https://www.ucsm.edu.pe/' target='_blank'>Enlace a UCSM</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
