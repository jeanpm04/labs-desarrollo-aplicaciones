var admin = require("firebase-admin");
var serviceAccount = require("./prueba.json");

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://prueba-a5464-default-rtdb.firebaseio.com/"
});

var db = admin.database();
var ref = db.ref("server/data");
var usersRef = ref.child("nodejs");
usersRef.set({
usuarios: {
name: "jean montoya",
age: 19,
salary: 2536.36
}
});