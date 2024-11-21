require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware para verificar el token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization']; // Obtenemos el token del encabezado Authorization

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken; // Asignamos el token al objeto de la solicitud
    next(); // Continuamos con el siguiente middleware
  } else {
    res.sendStatus(403); // Si no hay token, respondemos con un 403 (Prohibido)
  }
}

// Ruta protegida para obtener información del usuario
app.get('/api/user', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403); // Si el token es inválido o ha expirado
    } else {
      res.json({
        message: 'Acceso autorizado al usuario',
        authData: authData
      });
    }
  });
});

// Ruta protegida para obtener información del administrador
app.get('/api/admin', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err) {
      res.sendStatus(403); // Si el token es inválido o ha expirado
    } else {
      // Verificamos si el usuario es un administrador
      if (authData.user.role === 'admin') {
        res.json({
          message: 'Acceso autorizado al administrador',
          authData: authData
        });
      } else {
        res.sendStatus(403); // Si no es admin, retornamos 403
      }
    }
  });
});

// Ruta para Login y generación de token
app.post('/api/login', (req, res) => {
  // Simulamos un usuario
  const user = {
    id: 1,
    username: 'jean',
    email: 'jean@gmail.com',
    role: 'admin' // Cambiar a 'user' para probar un usuario normal
  };

  // Generamos un token JWT con expiración de 60 segundos
  jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '60s' }, (err, token) => {
    res.json({
      token: token // Retornamos el token generado
    });
  });
});

// Iniciamos el servidor en el puerto 5000
app.listen(5000, () => console.log('Servidor corriendo en el puerto 5000'));
