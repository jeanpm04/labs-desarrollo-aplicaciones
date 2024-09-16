//Función para generar la contraseña segura
function generarContrasena() {
    //Obtener longitud de la contraseña
    const longitud = document.getElementById('longitud').value;
    //Arrays de caracteres permitidos
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
    let caracteresDisponibles = '';
    let contrasenaGenerada = '';
    //Verificar qué tipos de caracteres están seleccionados
    if (document.getElementById('mayusculas').checked) {
        caracteresDisponibles += letrasMayusculas;
    }
    if (document.getElementById('minusculas').checked) {
        caracteresDisponibles += letrasMinusculas;
    }
    if (document.getElementById('numeros').checked) {
        caracteresDisponibles += numeros;
    }
    if (document.getElementById('simbolos').checked) {
        caracteresDisponibles += simbolos;
    }
    //Si no se selecciona ningún tipo de carácter
    if (caracteresDisponibles === '') {
        document.getElementById('resultado').innerHTML = "Seleccione al menos un tipo de carácter.";
        return;
    }
    //Generar la contraseña aleatoria
    for (let i=0; i<longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
        contrasenaGenerada += caracteresDisponibles[randomIndex];
    }
    //Mostrar la contraseña generada
    document.getElementById('resultado').innerHTML = contrasenaGenerada;
}
