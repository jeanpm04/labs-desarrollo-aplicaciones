import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import ItemList from './components/ItemList/ItemList';
import './App.css';

function App() {
  const title = "Actividad 3";
  const footerMessage = "Derechos Reservados, Claro que Si";

  const [products, setProducts] = useState([
    { name: 'Laptop', price: 2899.99 },
    { name: 'TV', price: 5000.50 },
    { name: 'Radio', price: 350.00 },
    { name: 'Aire', price: 100.00 },
  ]);

  const removeItem = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  return (
    <div className="App">
      <Header title={title} />
      <Content />
      <Footer message={footerMessage} />
      <h2>Compra algo ya que estas aqui:</h2>
      <ItemList items={products} onRemove={removeItem} />
    </div>
  );
}

export default App;
