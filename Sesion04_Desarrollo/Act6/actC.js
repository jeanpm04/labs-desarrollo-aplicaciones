//1
function visualizarPropiedadesNumber() {
    console.log("Propiedades del objeto Number:");
    console.log("Valor máximo: " + Number.MAX_VALUE);
    console.log("Valor mínimo: " + Number.MIN_VALUE);
    console.log("Valor NaN: " + Number.NaN);
}
visualizarPropiedadesNumber();

//2
function visualizarPropiedadesNumber() {
    console.log("Propiedades del objeto Number:");
    console.log("Valor máximo: " + Number.MAX_VALUE);
    console.log("Valor mínimo: " + Number.MIN_VALUE);
    console.log("Valor NaN: " + Number.NaN);

    // Métodos del objeto Number
    let numero = 1234.567;
    console.log("Número con toFixed(2): " + numero.toFixed(2));  // Redondea a 2 decimales
    console.log("Número en notación exponencial: " + numero.toExponential(2));  // Notación exponencial
    console.log("Número como string: " + numero.toString());  // Convierte a string
}
visualizarPropiedadesNumber();
