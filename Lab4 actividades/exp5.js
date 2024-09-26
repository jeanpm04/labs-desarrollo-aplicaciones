let numeros = [1, 2, 3, 4, 5];
let nombres = ["Chio", "Luis", "Mar"];
let personas = [
  { nombre: "Ale", edad: 25 },
  { nombre: "Alex", edad: 30 }
];

//Ingresar datos
numeros.push(6);
nombres.push("Xime");
personas.push({ nombre: "JAFSJ", edad: 36 });


//Eliminar 
numeros.pop();
//buscar por índice
let indiceAna = nombres.indexOf("Ana");
console.log(indiceAna);

//forEach
numeros.forEach(function(numero){
    console.log(numero);
});
nombres.forEach(function(nombre){
    console.log(nombre);
});
