// Sección a) CIUDADANO DE PRIMERA CLASE

// 1. Declaración de una función de primera clase
const foo = () => {
    console.log("foobar");
};
foo(); // Llama a la función
// Resultado: foobar

// 2. Función que toma otra función como argumento
function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");
// Resultado: Hello, JavaScript!

// 3. Función que retorna otra función
function sayHelloNested() {
    return () => {
        console.log("Hello!");
    };
}
sayHelloNested()(); // Invoca la función retornada
// Resultado: Hello!

// Condiciones de una función de primera clase:
// - Puede ser asignada a una variable.
// - Puede ser pasada como argumento a otra función.
// - Puede ser retornada por otra función.

// Sección b) CLOSURE

// 1. Ejemplo básico de un closure
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
myFunc(); // Invoca el closure
// Resultado: Mozilla

// Condiciones para utilizar un closure:
// - Una función interna puede acceder a las variables de su función externa, incluso después de que la función externa haya terminado de ejecutarse.

// Sección c) ÁMBITO DE FUNCIÓN

// 1. Ejemplo de ámbito de una función
function exampleFunction() {
    const x = "declared inside function"; // x solo es accesible dentro de exampleFunction
    console.log("Inside function");
    console.log(x); // Imprime el valor de x dentro de la función
}
exampleFunction();
// console.log(x); // Descomentar causaría un error: x no está definida en este ámbito global

// 2. Ejemplo de ámbito global y local
const x = "declared outside function";
exampleFunction();
function exampleFunction() {
    console.log("Inside function");
    console.log(x); // x es accesible porque está declarada fuera
}
console.log("Outside function");
console.log(x); // x sigue siendo accesible fuera de la función

// 3. Manejo de excepciones con bloques try-catch-finally
function f() {
    try {
        console.log(0);
        throw 'bogus'; // Lanza una excepción
    } catch (e) {
        console.log(1);
        return true; // Este return es suspendido hasta que el bloque finally se complete
    } finally {
        console.log(3);
        return false; // Sobrescribe cualquier return anterior
    }
    // El código posterior no es accesible
}
console.log(f()); // Resultado esperado: 0, 1, 3, false

// Sección d) MANEJO DE EXCEPCIONES

// 1. Definición de una excepción personalizada
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}

function getMonthName(mo) {
    mo--; // Ajustar el número del mes para el índice del array
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
        return months[mo];
    } else {
        throw new UserException('InvalidMonthNo'); // Lanza una excepción personalizada
    }
}

let monthName;
try {
    const myMonth = 15; // Mes fuera de rango para generar la excepción
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = 'unknown';
    console.error(e.message, e.name); // Manejo de la excepción
}
// Resultado: InvalidMonthNo, UserException
