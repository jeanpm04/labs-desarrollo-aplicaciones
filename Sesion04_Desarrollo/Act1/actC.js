        function cambiarMensaje() {
            document.getElementById('mensaje').textContent = "El mensaje se cambio";
        }

        function restablecerMensaje() {
            document.getElementById('mensaje').textContent = "Click en el boton para cambiar el mensaje";
        }

        document.getElementById('miBoton').addEventListener('click', cambiarMensaje);
        document.getElementById('resetearBoton').addEventListener('click', restablecerMensaje);

        console.log("Hola Mundo");
