import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Productos from './components/Productos';
import DetallesProducto from './components/DetallesProducto';

function App() {
  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav>
          <ul>
            <li><Link to="/productos">Productos</Link></li>
          </ul>
        </nav>

        {/* Configuración de rutas */}
        <Routes>
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetallesProducto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
