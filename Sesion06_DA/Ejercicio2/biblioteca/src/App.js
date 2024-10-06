import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Explorar from './components/Explorar';
import Biblioteca from './components/Biblioteca';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [misLibros, setMisLibros] = useState([]);

  const handleLogin = () => setLoggedIn(true);
  const agregarLibro = (libro) => setMisLibros([...misLibros, libro]);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/explorar">Explorar</Link>
          {loggedIn && <Link to="/biblioteca">Biblioteca</Link>}
          {!loggedIn && <Link to="/login">Login</Link>}
        </nav>

        <Routes>
          <Route path="/explorar" element={<Explorar agregarLibro={agregarLibro} />} />
          <Route path="/biblioteca" element={loggedIn ? <Biblioteca libros={misLibros} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
