var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

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
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write('Error al cargar el archivo HTML');
                res.end();
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (req.method === 'POST' && req.url === '/insertar') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            var postData = querystring.parse(body);
            var nombre = postData.nombre;
            var puesto = postData.puesto;

            conexion.query('INSERT INTO empleados (nombre, puesto) VALUES (?, ?)', [nombre, puesto], function(err, results) {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.write('Error al insertar datos');
                    res.end();
                    return;
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<p>Empleado registrado con éxito</p>');
                res.end();
            });
        });
    }
});

server.listen(3000, function() {
    console.log('Servidor en funcionamiento en el puerto 3000');
});
