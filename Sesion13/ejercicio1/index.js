var admin = require("firebase-admin");
var serviceAccount = require("./clave_privada.json");

// Inicializa Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ejercicio1-da.appspot.com"
});

// Accede a la base de datos de Firestore
var db = admin.firestore();

// Colección de libros
var booksCollection = db.collection("books");

// Colección de autores
var authorsCollection = db.collection("authors");

// Función para agregar un libro solo si no existe
async function addBookIfNotExist(book) {
  // Buscamos si el libro ya existe en la base de datos por el título
  const querySnapshot = await booksCollection
    .where("title", "==", book.title)
    .get();

  if (querySnapshot.empty) {
    // Si el libro no existe, lo agregamos
    await booksCollection.add(book);
    console.log(`El libro "${book.title}" se ha agregado.`);
  } else {
    console.log(`El libro "${book.title}" ya existe.`);
  }
}

// Función para agregar un autor solo si no existe
async function addAuthorIfNotExist(author) {
  // Buscamos si el autor ya existe en la base de datos por el nombre
  const querySnapshot = await authorsCollection
    .where("name", "==", author.name)
    .get();

  if (querySnapshot.empty) {
    // Si el autor no existe, lo agregamos
    await authorsCollection.add(author);
    console.log(`El autor "${author.name}" se ha agregado.`);
  } else {
    console.log(`El autor "${author.name}" ya existe.`);
  }
}

// Función para agregar libros y autores
async function addBooksAndAuthors() {
  // Agregar libros
  await addBookIfNotExist({
    title: "Hábitos Atómicos",
    author: "James Clear",
    year: 2018,
    copies: 7
  });

  await addBookIfNotExist({
    title: "Amigo Imaginario",
    author: "Stephen Chbosky",
    year: 2019,
    copies: 4
  });

  await addBookIfNotExist({
    title: "Psicología Oscura",
    author: "Daniel James Hollins",
    year: 2020,
    copies: 6
  });

  // Agregar autores
  await addAuthorIfNotExist({
    name: "James Clear",
    nationality: "American",
    birthYear: 1986
  });

  await addAuthorIfNotExist({
    name: "Stephen Chbosky",
    nationality: "American",
    birthYear: 1970
  });

  await addAuthorIfNotExist({
    name: "Daniel James Hollins",
    nationality: "British",
    birthYear: 1980
  });
}

addBooksAndAuthors();