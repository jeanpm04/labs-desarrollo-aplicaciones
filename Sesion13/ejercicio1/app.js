const express = require("express");
const admin = require("firebase-admin");
const app = express();

// Inicializa Firebase
var serviceAccount = require("./clave_privada.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ejercicio1-da.appspot.com"
});

app.use(express.json());

// Accede a la base de datos de Firestore
const db = admin.firestore();

// Ruta para obtener todos los libros
app.get("/books", async (req, res) => {
  try {
    const booksSnapshot = await db.collection("books").get();
    const books = booksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(books);
  } catch (error) {
    res.status(500).send("Error al obtener libros");
  }
});

// Ruta para agregar un libro
app.post("/books", async (req, res) => {
  try {
    const newBook = req.body;
    const addedBook = await db.collection("books").add(newBook);
    res.json({ id: addedBook.id, ...newBook });
  } catch (error) {
    res.status(500).send("Error al agregar libro");
  }
});

// Ruta para subir documentos
app.post("/upload", async (req, res) => {
  const { filePath, destination } = req.body;
  try {
    await uploadFile(filePath, destination);
    res.send("Archivo subido correctamente");
  } catch (error) {
    res.status(500).send("Error al subir archivo");
  }
});

// Puerto
app.listen(3000, () => {
  console.log("Servidor API escuchando en el puerto 3000");
});
