// EXPERIENCIA DE PRÁCTICA N° 04: USO DE OBJETOS

// a) CREACIÓN DE OBJETOS

// 1. Crear un objeto utilizando iniciadores de objetos (object literals)
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
persona.saludar(); // Resultado: "Hola, mi nombre es Juan"

// 2. Crear un objeto utilizando un método constructor
function Carro(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
const miCarro = new Carro("Toyota", "Corolla", 2021);
console.log(miCarro.marca); // Resultado: "Toyota"

// 3. Crear un objeto utilizando el método Object.create()
const animal = {
    tipo: "mamífero",
    hacerSonido: function() {
        console.log("Sonido de animal");
    }
};
const perro = Object.create(animal);
perro.nombre = "Rex";
perro.hacerSonido(); // Resultado: "Sonido de animal"
console.log(perro.tipo); // Resultado: "mamífero"

// b) AGREGANDO PROPIEDADES A LOS OBJETOS

// 1. Agregar propiedades a un objeto utilizando iniciadores de objetos
persona.ocupacion = "Desarrollador";
console.log(persona.ocupacion); // Resultado: "Desarrollador"

// 2. Agregar propiedades a un objeto creado con un constructor
Carro.prototype.color = "Rojo"; // Añadimos una nueva propiedad a todos los objetos tipo Carro
console.log(miCarro.color); // Resultado: "Rojo"

// 3. Agregar propiedades a un objeto utilizando Object.create()
perro.raza = "Labrador";
console.log(perro.raza); // Resultado: "Labrador"