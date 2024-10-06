import './CarList.css';

function CarList({ cars }) {
  return (
    <div className="car-list">
      <h2>Lista de Carros</h2>
      <div className="car-list-container">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <h3>{car.make} {car.model}</h3>
            <p>Año: {car.year}</p>
            <p>Precio: ${car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
