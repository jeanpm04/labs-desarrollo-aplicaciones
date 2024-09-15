const foo = () => {
    console.log("foobar");
   }

   foo(); 

/*En este codigo se crea una funcion
usando "const", la cual va a mostrar 
por consola la palabra "foobar", 
luego se la llama,*/

function sayHello() {
    return "Hello, ";
   }
   function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
   }
   // Pass `sayHello` as an argument to `greeting` function
   greeting(sayHello, "JavaScript!");
   // Hello, JavaScript!

/*La funcion sayHello() unicamente 
retorna el String "Hello, ", luego se
crea otra funcion que puede recibir
dos parametros, que en este caso,
se le envia el retorno de sayHello() y
la palabra "JavaScript!" que mostrata
por consola esas dos cadenas juntas.*/

function sayHello() {
    return () => {
    console.log("Hello!");
    }
   }

/*De la misma forma, se crea una funcion
sayHello() pero en este caso el retorno
sera un arrow function, es decir
que no basta con ejecutar solamente el
sayHello, sino que tambien sera necesario
ejecutar su retorno, un ejemplo de como
usarlo seria el siguiente:  */

let helloHello = sayHello();
console.log(helloHello())
