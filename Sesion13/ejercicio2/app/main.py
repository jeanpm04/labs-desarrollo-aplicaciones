from flask import Flask, jsonify, request
import firebase_admin
from firebase_admin import credentials, db

app = Flask(__name__)

# Inicializa la aplicación de Firebase con la clave privada
cred = credentials.Certificate("./clave_privada2.json")  # Ruta al archivo JSON de la clave privada
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://da-ejercicio2-d5e01-default-rtdb.firebaseio.com/'  # URL Firebase
})

# Referencia a la base de datos
ref = db.reference('usuarios')


@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    # Obtener datos de la base de datos
    usuarios = ref.get()
    return jsonify(usuarios)  # Devuelve los datos en formato JSON


@app.route('/usuarios', methods=['POST'])
def add_usuario():
    # Obtener los datos de la solicitud (esperamos un JSON)
    new_user = request.get_json()
    
    # Asegurarnos de que la clave 'nombre', 'edad' y 'salario' estén presentes
    if 'nombre' in new_user and 'edad' in new_user and 'salario' in new_user:
        usuarios = ref.get() or []  # Obtener usuarios existentes, si no hay ninguno, usamos una lista vacía
        usuarios.append(new_user)  # Agregar el nuevo usuario a la lista
        ref.set(usuarios)  # Establecer los datos en la base de datos
        return jsonify({"message": "Usuario agregado exitosamente"}), 201
    else:
        return jsonify({"error": "Datos incompletos"}), 400


if __name__ == '__main__':
    app.run(debug=True)
