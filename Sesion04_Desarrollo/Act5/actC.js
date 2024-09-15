//1
let numeros = [1, 2, 3, 4, 5];  // Array numérico
let palabras = ["casa", "perro", "auto"];  // Array de strings
let personas = [{nombre: "Juan", edad: 30}, {nombre: "Maria", edad: 25}];  // Array de objetos

numeros.forEach(num => {
    console.log(`Número: ${num}`);
});

palabras.forEach(palabra => {
    console.log(`Palabra: ${palabra}`);
});

personas.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
});

let cuadrados = numeros.map(num => num * num);
console.log(cuadrados);
