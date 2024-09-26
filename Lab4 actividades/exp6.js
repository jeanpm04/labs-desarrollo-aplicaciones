//uso del objeto window
function mostrarPropiedadesWindow(){
    console.log(window);
    console.log(window.innerHeight); // Muestra la altura interna de la ventana
    console.log(window.innerWidth);  // Muestra el ancho interno de la ventana
    window.alert("Esto es una alerta de ejemplo."); // Muestra una alerta en la ventana
    console.log(window.location.href); // Muestra la URL actual
}
mostrarPropiedadesWindow();

//uso del objeto array
function mostrarPropiedadesArray(){
    let arrEjemplo = [1, 2, 3, 4, 5];
    console.log(arrEjemplo); // Muestra el array y sus propiedades
    console.log("Longitud del array: " + arrEjemplo.length); // Muestra la longitud del array
    arrEjemplo.push(6); // Agrega un nuevo elemento al final del array
    console.log("Array después de agregar un elemento: " + arrEjemplo);
    arrEjemplo.pop(); // Elimina el último elemento del array
    console.log("Array después de eliminar el último elemento: " + arrEjemplo);
    let arrInvertido = arrEjemplo.reverse(); // Invierte el array
    console.log("Array invertido: " + arrInvertido);
}
mostrarPropiedadesArray();

//uso del objeto number
function mostrarPropiedadesNumber() {
    let num = 123.456;
    console.log(num); 
    console.log("Máximo: " + Number.MAX_VALUE);
    console.log("Mínimo: " + Number.MIN_VALUE);
    let esNaN = isNaN(num); // Verifica si es un número
    console.log("¿Es un número?: " + esNaN);
}
mostrarPropiedadesNumber();