//1
function visualizarPropiedadesArray() {
    let array = [1, 2, 3, 4, 5];
    console.log("Propiedades del Array:");
    console.log("Length: " + array.length);
}
visualizarPropiedadesArray();

//2
function visualizarPropiedadesArray() {
    let array = [1, 2, 3, 4, 5];
    console.log("Propiedades del Array:");
    console.log("Length: " + array.length);

    // Métodos de Array
    array.push(6);  // Agrega un elemento
    console.log("Array después de push: " + array);
    
    array.pop();  // Elimina el último elemento
    console.log("Array después de pop: " + array);
    
    array.reverse();  // Invierte el array
    console.log("Array después de reverse: " + array);
}
visualizarPropiedadesArray();
