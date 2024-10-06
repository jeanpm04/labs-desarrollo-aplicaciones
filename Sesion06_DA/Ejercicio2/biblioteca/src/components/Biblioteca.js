function Biblioteca({ libros }) {
  return (
    <div className="biblioteca">
      <h2>Mi Biblioteca</h2>
      {libros.length > 0 ? (
        <div className="lista-libros">
          {libros.map((libro) => (
            <div key={libro.id} className="libro">
              <img src={libro.portada} alt={libro.titulo} />
              <h3>{libro.titulo}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay libros en tu biblioteca aún.</p>
      )}
    </div>
  );
}

export default Biblioteca;
