//1
let bike = {
    brand: "Yamaha",
    model: "MT-07",
    year: 2019,
    color: "Blue" 
};

//2
function Bike(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;  
}

let myBike = new Bike("Ducati", "Panigale V4", 2022, "Red");
console.log(myBike);  

//3
let bikePrototype = {
    start() {
        console.log("Bike started");
    }
};

let myNewBike = Object.create(bikePrototype);
myNewBike.brand = "Kawasaki";
myNewBike.model = "Ninja ZX-6R";
myNewBike.year = 2021;
myNewBike.color = "Green"; 

console.log(myNewBike);