import React from 'react';
import './ItemList.css';

const ItemList = ({ items, onRemove }) => {
  return (
    <div className="item-list">
      <h2>Lista de Productos</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            <h3>{item.name}</h3>
            <p>Precio: S/{item.price}</p>
            <button onClick={() => onRemove(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
