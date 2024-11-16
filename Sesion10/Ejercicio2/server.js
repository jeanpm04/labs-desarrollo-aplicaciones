var http = require('http');
var mysql = require('mysql');
var fs = require('fs');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'empresa'
});

conexion.connect(function(err) {
    if (err) {
        console.log('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado como id ' + conexion.threadId);
});

var server = http.createServer(function(req, res) {
    if (req.url === '/') {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Error al cargar la página');
                res.end();
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.url === '/empleados') {
        conexion.query('SELECT * FROM empleados', function(err, results) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Error al consultar la base de datos');
                res.end();
                return;
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(results));
        });
    }
});

server.listen(3000, function() {
    console.log('Servidor funcionando en el puerto 3000');
});
