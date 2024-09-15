function exampleFunction() {
    const x = "declared inside function"; 
    console.log("Inside function");
    console.log(x);
   }
   console.log(x); 

/* En esta parte, se intenta usar 
una variable local como global lo
 cual no es posible. */

const x = "declared outside function";
exampleFunction();
function exampleFunction() {
 console.log("Inside function");
 console.log(x);
}
console.log("Outside function");
console.log(x);

/* En este caso, la constante se declara
fuera, lo que hace que esta sea global y
pueda ser usada en funciones anidadas. */

function f() {
    try {
    console.log(0);
    throw 'bogus';
    } catch (e) {
    console.log(1);
    return true; // this return statement is suspended
    // until finally block has completed
    console.log(2); // not reachable
    } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5); // not reachable
   }
   console.log(f()); // 0, 1, 3, false

/* Esta funcion es un try-catch en JavaScript */