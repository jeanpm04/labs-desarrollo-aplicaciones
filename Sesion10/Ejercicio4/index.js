// Importando paquete Express
var express = require('express');

// Creando aplicación en Express
var app = express();

// Ruta principal
app.get('/', function(req, res) {
    res.send('Bienvenido a mi aplicación Express');
});

// Ruta para mostrar información de un usuario
app.get('/user', function(req, res) {
    res.send('Información del usuario');
});

// Ruta para contacto
app.get('/contact', function(req, res) {
    res.send('Página de contacto');
});

// Servidor escucha en el puerto 3000
app.listen(3000, function() {
    console.log('Servidor funcionando en el puerto 3000');
});
