//Función para calcular la propina
function calcularPropina() {
    //Obtener datos
    let totalCompra = parseFloat(document.getElementById('caja1').value);
    let porcentajePropina = parseFloat(document.getElementById('caja2').value);
    //Validaciones
    if (isNaN(totalCompra) || totalCompra <= 0) {
        document.getElementById('r1').innerHTML = "Introduce un monto válido";
        document.getElementById('r2').innerHTML = "";
        return;
    }
    if (isNaN(porcentajePropina) || porcentajePropina < 0) {
        document.getElementById('r1').innerHTML = "Introduce un porcentaje válido";
        document.getElementById('r2').innerHTML = "";
        return;
    }
    //Cálculo
    let resultado1 = totalCompra * (porcentajePropina / 100);
    let resultado2 = totalCompra + resultado1;
    //Mostrar resultados
    document.getElementById('r1').innerHTML = resultado1.toFixed(2);
    document.getElementById('r2').innerHTML = resultado2.toFixed(2);
}
