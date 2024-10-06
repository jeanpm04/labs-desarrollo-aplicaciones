const librosDisponibles = [
    { id: 1, titulo: 'Los secretos de la mente millonaria', portada: 'https://images.cdn1.buscalibre.com/fit-in/360x360/26/04/26042cee90ca42fd7175339b103e4aed.jpg' },
    { id: 2, titulo: 'Piensa y hágase rico', portada: 'https://images.cdn1.buscalibre.com/fit-in/360x360/53/69/536960f249717e5b8c9b2aa847ea45e1.jpg' },
    { id: 3, titulo: 'El monje que vendió su Ferrari', portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4e/b3/4eb3c365bb5225c909e9924aa65191e5.jpg' },
    { id: 4, titulo: 'Quién se ha llevado mi queso', portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/e4/c4/e4c462fece7bd260fdd612774e020184.jpg' },
    { id: 5, titulo: 'La magia del orden', portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/29/4d/294dc781a96d2633f88cc360f7a26178.jpg' },
    { id: 6, titulo: 'Despierta tu héroe interior', portada: 'https://images.cdn3.buscalibre.com/fit-in/360x360/e9/0f/e90ff35434eeeb45a5116e4b7f806e6d.jpg' },
    { id: 7, titulo: 'El poder del ahora', portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/7e/93/7e93fa1653cd4f0bd416ac6677c2a885.jpg' },
    { id: 8, titulo: 'Tus zonas erróneas', portada: 'https://images.cdn2.buscalibre.com/fit-in/360x360/6a/72/6a72868fd5c0ff5191b0b36f626b1c34.jpg' },
    { id: 9, titulo: 'Como ganar amigos e influir sobre las personas', portada: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b5/70/b570052e2ce7cb1ba62273d4509bc646.jpg' },
    { id: 10, titulo: 'La vida es un viaje', portada: 'https://images.cdn1.buscalibre.com/fit-in/360x360/f5/37/f53733af1eea58b700bd0b3bbbe5e0cf.jpg' },
  ];

function Explorar({ agregarLibro }) {
  return (
    <div className="explorar">
      <h2>Explorar Libros</h2>
      <div className="lista-libros">
        {librosDisponibles.map((libro) => (
          <div key={libro.id} className="libro">
            <img src={libro.portada} alt={libro.titulo} />
            <h3>{libro.titulo}</h3>
            <button onClick={() => agregarLibro(libro)}>Agregar a la Biblioteca</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explorar;
