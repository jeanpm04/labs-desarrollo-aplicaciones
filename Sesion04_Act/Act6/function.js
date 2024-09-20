// EXPERIENCIA DE PRÁCTICA N° 06: USO DE OBJETOS GLOBALES
// a) USO DE OBJETO WINDOW
// 1. Función para visualizar las propiedades del objeto Window
function mostrarPropiedadesWindow() {
    console.log("Propiedades del objeto Window:");
    console.log("Altura de la ventana (innerHeight):", window.innerHeight);
    console.log("Anchura de la ventana (innerWidth):", window.innerWidth);
    console.log("URL actual (location.href):", window.location.href);
}
// 2. Uso de algunos métodos del objeto Window
function usarMetodosWindow() {
    console.log("Redirigiendo a Google en 3 segundos...");
    setTimeout(() => {
        window.alert("Serás redirigido a Google");
        //window.location.href = "https://www.google.com"; // Descomentar para probar la redirección
    }, 3000);
}
// Llamar a las funciones para probar
mostrarPropiedadesWindow();
usarMetodosWindow();

// b) USO DEL OBJETO ARRAY
// 1. Función para visualizar las propiedades del objeto Array
function mostrarPropiedadesArray() {
    const ejemploArray = [1, 2, 3, 4, 5];
    console.log("Propiedades del objeto Array:");
    console.log("Longitud del array (length):", ejemploArray.length);
}

// 2. Uso de algunos métodos del objeto Array
function usarMetodosArray() {
    const ejemploArray = [1, 2, 3, 4, 5];
    console.log("Método join():", ejemploArray.join(" - ")); // Une los elementos en un string
    console.log("Método reverse():", ejemploArray.reverse()); // Invierte el array
}
// Llamar a las funciones para probar
mostrarPropiedadesArray();
usarMetodosArray();

// c) USO DEL OBJETO NUMBER
// 1. Función para visualizar las propiedades del objeto Number
function mostrarPropiedadesNumber() {
    const ejemploNumber = 123.456;
    console.log("Propiedades del objeto Number:");
    console.log("Número máximo (MAX_VALUE):", Number.MAX_VALUE);
    console.log("Número mínimo (MIN_VALUE):", Number.MIN_VALUE);
    console.log("Valor del ejemplo (ejemploNumber):", ejemploNumber);
}

// 2. Uso de algunos métodos del objeto Number
function usarMetodosNumber() {
    const ejemploNumber = 123.456;
    console.log("Método toFixed(2):", ejemploNumber.toFixed(2)); // Redondea a 2 decimales
    console.log("Método toString():", ejemploNumber.toString()); // Convierte el número a string
}
// Llamar a las funciones para probar
mostrarPropiedadesNumber();
usarMetodosNumber();