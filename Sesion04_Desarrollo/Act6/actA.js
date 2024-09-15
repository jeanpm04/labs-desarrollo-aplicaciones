//1
function visualizarPropiedadesWindow() {
    let propiedades = "";
    for (let propiedad in window) {
        propiedades += propiedad + ": " + window[propiedad] + "\n";
    }
    console.log(propiedades);
}
visualizarPropiedadesWindow();

//2
function visualizarPropiedadesWindow() {
    let propiedades = "";
    for (let propiedad in window) {
        propiedades += propiedad + ": " + window[propiedad] + "\n";
    }
    console.log(propiedades);

    // Ejemplo de métodos de window
    alert("Este es un método alert de window");
    let decision = confirm("¿Quieres continuar?");
    if (decision) {
        let nombre = prompt("Ingresa tu nombre:");
        alert("Hola, " + nombre);
    }
}
visualizarPropiedadesWindow();
