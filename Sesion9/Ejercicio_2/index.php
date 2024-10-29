<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cargar y Ver Archivos</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body class="container">
    <h1>Cargar Archivo</h1>
    <form action="upload.php" method="post" enctype="multipart/form-data" class="formulario">
        <label for="especialidad">Especialidad:</label>
        <select name="especialidad" id="especialidad" class="select">
            <option value="Estadistica">Estadística</option>
            <option value="DesarrolloWeb">Desarrollo Web</option>
            <option value="Testing">Testing</option>
        </select>
        
        <label for="archivo">Seleccionar archivo:</label>
        <input type="file" name="archivo" id="archivo" class="archivo-input" required>
        
        <input type="submit" value="Subir archivo" class="btn">
    </form>

    <hr class="divider">

    <h2>Archivos Subidos</h2>
    <?php
    include 'db.php';

    $sql = "SELECT id, nombre, especialidad FROM archivos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<form method='get' action='' class='formulario'>";
        echo "<label for='archivo_id'>Selecciona un archivo para ver su contenido:</label>";
        echo "<select name='archivo_id' id='archivo_id' class='select'>";
        
        while ($row = $result->fetch_assoc()) {
            echo "<option value='" . $row['id'] . "'>" . $row['nombre'] . " (" . $row['especialidad'] . ")</option>";
        }

        echo "</select>";
        echo "<input type='submit' value='Ver archivo' class='btn'>";
        echo "</form>";
    } else {
        echo "<p class='mensaje'>No hay archivos subidos.</p>";
    }

    $conn->close();
    ?>

    <hr class="divider">

    <?php
    if (isset($_GET['archivo_id'])) {
        include 'db.php';
        $archivo_id = $_GET['archivo_id'];
        
        $sql = "SELECT ruta FROM archivos WHERE id = $archivo_id";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $ruta_archivo = $row['ruta'];

            if (file_exists($ruta_archivo)) {
                $contenido = file_get_contents($ruta_archivo);
                echo "<h2>Contenido del archivo:</h2>";
                echo "<pre class='archivo-contenido'>" . htmlspecialchars($contenido) . "</pre>";
            } else {
                echo "<p class='mensaje'>El archivo no existe.</p>";
            }
        } else {
            echo "<p class='mensaje'>Archivo no encontrado.</p>";
        }

        $conn->close();
    }
    ?>
</body>
</html>
