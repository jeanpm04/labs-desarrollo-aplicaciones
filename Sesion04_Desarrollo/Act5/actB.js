//1
let numeros = [1, 2, 3, 4, 5];  // Array numérico
let palabras = ["casa", "perro", "auto"];  // Array de strings
let personas = [{nombre: "Juan", edad: 30}, {nombre: "Maria", edad: 25}];  // Array de objetos
// Agregar un número al final del array
numeros.push(20);

// Eliminar el primer elemento
palabras.shift();

// Ordenar los números en orden ascendente
numeros.sort((a, b) => a - b);

// Filtrar personas mayores de 30 años
let mayores = personas.filter(persona => persona.edad > 30);
console.log(mayores);
