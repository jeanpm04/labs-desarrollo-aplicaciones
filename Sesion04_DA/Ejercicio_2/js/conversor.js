//Función para convertir la temperatura
function convertirTemperatura() {
    //Obtener la temperatura ingresada y la unidad seleccionada
    let temperatura = parseFloat(document.getElementById('temp').value);
    let unidad = document.getElementById('unidad').value;
    //Verificar si el valor ingresado es un número válido
    if (isNaN(temperatura)) {
        document.getElementById('resultado').innerHTML = "Por favor ingrese un número válido";
        return;
    }
    let resultado;
    //Convertir según la unidad seleccionada
    if (unidad === "Celsius") {
        resultado = (temperatura * 9/5) + 32;
        document.getElementById('resultado').innerHTML = `${temperatura}°C son ${resultado.toFixed(2)}°F`;
    } else {
        resultado = (temperatura - 32) * 5/9;
        document.getElementById('resultado').innerHTML = `${temperatura}°F son ${resultado.toFixed(2)}°C`;
    }
}
