// a) CREACIÓN DE ARRAYS
// 1. Crear 3 arrays diferentes (numérico) bajo los 3 métodos de creación.
// Array numérico utilizando array literal
const numeros1 = [1, 2, 3, 4, 5];

// Array numérico utilizando el constructor Array
const numeros2 = new Array(6, 7, 8, 9, 10);

// Array numérico utilizando el método Array.from()
const numeros3 = Array.from([11, 12, 13, 14, 15]);

// 2. Hacer rutinas para el ingreso de datos a los 3 arreglos.
// Ingresar datos en el array utilizando push()
numeros1.push(6);
console.log(numeros1); // Resultado: [1, 2, 3, 4, 5, 6]

// Ingresar datos en el array con índices
numeros2[5] = 11;
console.log(numeros2); // Resultado: [6, 7, 8, 9, 10, 11]

// Ingresar datos en el array utilizando unshift() (al inicio)
numeros3.unshift(10);
console.log(numeros3); // Resultado: [10, 11, 12, 13, 14, 15]

// b) MANIPULACIÓN DE ARRAYS
// 1. Aplicar diferentes tipos de acciones

// Acciones sobre array1 - eliminar el último elemento
numeros1.pop();
console.log(numeros1); // Resultado: [1, 2, 3, 4, 5]

// Acciones sobre array2 - eliminar el primer elemento
numeros2.shift();
console.log(numeros2); // Resultado: [7, 8, 9, 10, 11]

// c) USO DE ITERADORES DE ARRAYS
// 1. Aplicar diferentes tipos de iteradores

// Iterador forEach para mostrar los elementos de numeros1
numeros1.forEach(numero => console.log(numero)); 
// Resultado: 1, 2, 3, 4, 5

// Iterador map para duplicar los valores de numeros2
const numerosDuplicados = numeros2.map(numero => numero * 2);
console.log(numerosDuplicados); // Resultado: [14, 16, 18, 20, 22]

// Iterador reduce para sumar los valores de numeros3
const sumaTotal = numeros3.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(sumaTotal); // Resultado: 75
