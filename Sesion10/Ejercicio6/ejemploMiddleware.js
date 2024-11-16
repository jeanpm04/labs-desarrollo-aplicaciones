var express = require('express');

// Creando objeto Express
var app = express();

// Middleware de registro de solicitudes
const logMiddleware = function(req, res, next) {
    console.log('Solicitud recibida en: ' + req.url);
    next();
};

// Usando el middleware
app.use(logMiddleware);

// Ruta principal
app.get('/', function(req, res) {
    res.send('Página principal');
});

// Ruta de ayuda
app.get('/help', function(req, res) {
    res.send('Página de ayuda');
});

// Servidor escucha en el puerto 3000
app.listen(3000, function() {
    console.log('Servidor funcionando en el puerto 3000');
});
