var express = require('express');
var router = express.Router();

// Ruta principal
router.get('/', function(req, res) {
    res.send('Página Principal');
});

// Ruta de Login
router.get('/login', function(req, res) {
    res.send('Página de Login');
});

// Ruta de productos
router.get('/productos', function(req, res) {
    res.send('Catálogo de productos');
});

// Ruta de detalles de producto
router.get('/productos/:id', function(req, res) {
    res.send('Detalles del producto con ID: ' + req.params.id);
});

module.exports = router;
