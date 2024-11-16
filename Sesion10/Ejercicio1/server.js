var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Error al cargar el archivo HTML');
            res.end();
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data); // Enviar el archivo HTML
        res.end();
    });
});

server.listen(3000, function() {
    console.log('El servidor está funcionando en el puerto 3000');
});
