var express = require('express');

// Creando aplicación en Express
var app = express();

// Importando las rutas definidas en rutas.js
var rutas = require('./rutas');

// Usando las rutas en la aplicación
app.use('/', rutas);

// Servidor escucha en el puerto 3000
app.listen(3000, function() {
    console.log('Servidor funcionando en el puerto 3000');
});
