import express from 'express';

const app = express();
const port = 3000;

// Middleware para analizar cuerpos JSON
app.use(express.json());

// Datos en memoria
let productos = [
  { id: 1, nombre: 'Producto 1', descripcion: 'Descripcion 1', precio: 100, stock: 10 },
  { id: 2, nombre: 'Producto 2', descripcion: 'Descripcion 2', precio: 200, stock: 5 },
];

// Endpoint GET: Obtiene todos los productos
app.get('/productos', (req, res) => {
  res.status(200).json(productos);
});

// Endpoint POST: Agrega un nuevo producto
app.post('/productos', (req, res) => {
  console.log(req.body);  // Imprime el cuerpo de la solicitud

  const { nombre, descripcion, precio, stock } = req.body;

  // Validar que todos los campos estén presentes
  if (!nombre || !descripcion || precio == null || stock == null) {
    return res.status(400).json({ error: 'Todos los campos (nombre, descripcion, precio, stock) son obligatorios' });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    descripcion,
    precio,
    stock,
  };

  productos.push(nuevoProducto);  // Agrega el nuevo producto al array
  res.status(201).json(nuevoProducto);  // Devuelve el producto creado
});

// Endpoint PUT: Actualiza un producto por ID
app.put('/productos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock } = req.body;

  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  if (nombre !== undefined) producto.nombre = nombre;
  if (descripcion !== undefined) producto.descripcion = descripcion;
  if (precio !== undefined) producto.precio = precio;
  if (stock !== undefined) producto.stock = stock;

  res.status(200).json(producto);
});

// Endpoint DELETE: Elimina un producto por ID
app.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  const indice = productos.findIndex((p) => p.id === parseInt(id));

  if (indice === -1) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  productos.splice(indice, 1);
  res.status(200).json({ message: 'Producto eliminado correctamente' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});
