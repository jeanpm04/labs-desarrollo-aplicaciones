//1
let numeros = [1, 2, 3, 4, 5];  // Array numérico
let palabras = ["casa", "perro", "auto"];  // Array de strings
let personas = [{nombre: "Juan", edad: 30}, {nombre: "Maria", edad: 25}];  // Array de objetos

let numeros2 = new Array(6, 7, 8, 9, 10);  // Array numérico
let palabras2 = new Array("gato", "pajaro", "pez");  // Array de strings
let personas2 = new Array({nombre: "Pedro", edad: 28}, {nombre: "Ana", edad: 35});  // Array de objetos

let numeros3 = Array.of(11, 12, 13, 14, 15);  // Array numérico
let palabras3 = Array.of("sol", "luna", "estrella");  // Array de strings
let personas3 = Array.of({nombre: "Carlos", edad: 40}, {nombre: "Lucia", edad: 32});  // Array de objetos

//2
let nums = [];

for (let i = 0; i < 3; i++) {
    let num = parseInt(prompt("Ingresa un número:"));
    nums.push(num);
}

console.log(nums);

let pal = [];

for (let i = 0; i < 3; i++) {
    let palabra = prompt("Ingresa una palabra:");
    pal.push(palabra);
}

console.log(pal);

let pers= [];

for (let i = 0; i < 2; i++) {
    let nombre = prompt("Ingresa el nombre:");
    let edad = parseInt(prompt("Ingresa la edad:"));
    pers.push({ nombre: nombre, edad: edad });
}

console.log(pers);

