const admin = require("firebase-admin");
const path = require("path");

// Inicializa Firebase
var serviceAccount = require("./clave_privada.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ejercicio1-da.appspot.com"
});

const bucket = admin.storage().bucket();

async function uploadFile(filePath, destination) {
    try {
      await bucket.upload(filePath, {
        destination: destination, // Ruta en el bucket
        metadata: {
          contentType: "application/pdf",
        },
      });
      console.log(`Archivo subido exitosamente a ${destination}`);
    } catch (error) {
      console.error("Error al subir el archivo:", error);
    }
}
  
uploadFile("./documento_ejemplo.pdf", "documents/documento_ejemplo.pdf");