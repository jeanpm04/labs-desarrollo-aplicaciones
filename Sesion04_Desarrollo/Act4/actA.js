//1
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020
};

console.log(carro);

//2
function Carro(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

let myCar = new Carro("Honda", "Civic", 2021);
console.log(myCar);

//3
let carPrototype = {
    start() {
        console.log("Car started");
    },
    stop() {
        console.log("Car stopped");
    }
};

let myNewCar = Object.create(carPrototype);
myNewCar.brand = "Tesla";
myNewCar.model = "Model 3";
myNewCar.year = 2022;

console.log(myNewCar); 
myNewCar.start();       