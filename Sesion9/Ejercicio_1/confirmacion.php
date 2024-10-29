<?php
$nombreCompleto = $_POST['nombreCompleto'];
$direccion = $_POST['direccion'];
$correo = $_POST['correo'];
$password = $_POST['password'];
$fechaNacimiento = $_POST['fechaNacimiento'];
$sexo = $_POST['sexo'];

$fechaActual = new DateTime();
$fechaNacimientoObj = new DateTime($fechaNacimiento);
$edad = $fechaActual->diff($fechaNacimientoObj)->y;

$tipoPasajero = "Adulto";
$precio = 100;

if ($edad < 2) {
    $tipoPasajero = "Infante";
    $precio = 0;
} elseif ($edad < 18) {
    $tipoPasajero = "Menor de edad";
    $precio = $precio * 0.75;
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación del Registro</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Confirmación del Registro de Usuario</h1>
    <table>
        <tr>
            <th>Nombre completo</th>
            <td><?php echo htmlspecialchars($nombreCompleto); ?></td>
        </tr>
        <tr>
            <th>Dirección</th>
            <td><?php echo htmlspecialchars($direccion); ?></td>
        </tr>
        <tr>
            <th>Correo electrónico</th>
            <td><?php echo htmlspecialchars($correo); ?></td>
        </tr>
        <tr>
            <th>Edad</th>
            <td><?php echo $edad; ?> años</td>
        </tr>
        <tr>
            <th>Tipo de pasajero</th>
            <td><?php echo $tipoPasajero; ?></td>
        </tr>
        <tr>
            <th>Precio del pasaje</th>
            <td><?php echo "$" . number_format($precio, 2); ?></td>
        </tr>
    </table>
</body>
</html>
