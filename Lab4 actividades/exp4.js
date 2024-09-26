let persona = {
    nombre: "Chio",
    edad: 20,
    saludo: function (){
        console.log("Mi nombre es " + this.nombre);
    }
};
persona.saludo(); 

//constructor Persona
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.salud = function(){
        console.log("MI nombre es "+ this.nombre);
    };
}

//creación del objeto
let p1 = new Persona("Chio",20);
p1.saludo();

//usando el método object.create()
let cosa = {
    color: "rojo",
    peso: 10,
    accion: function(){
        console.log("Hacer algo");
    }
}
let c1 = Object.create(cosa);
cosa.accion();


//propiedades a los objetocs
persona.edad = 30;
console.log(persona.edad);

cosa.color = "rojo";
console.log(cosa.color);