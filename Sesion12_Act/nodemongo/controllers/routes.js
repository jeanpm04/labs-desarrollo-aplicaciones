// Importando paquetes y archivos necesarios para trabajar las rutas
var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products'); // Referencia al modelo de producto
var router = express.Router();

// Configurando el Parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Middleware para loguear cada request
router.use(function (req, res, next) {
    console.log("request");
    next();
});

// Métodos para manejar la Base de Datos MongoDB llamada node-crud
router.route('/products')
    .post(async function (req, res) {
        try {
            var product = new Product();
            product.name = req.body.name;
            product.amount = req.body.amount;
            product.description = req.body.description;

            // Guardar el producto en la base de datos
            await product.save();
            res.json({ message: "Producto registrado con éxito" });
        } catch (error) {
            res.status(500).send("Error en el servicio: " + error);
        }
    })
    .get(async function (req, res) {
        try {
            // Obtener todos los productos
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).send("Error en el servicio: " + error);
        }
    });

module.exports = router;
