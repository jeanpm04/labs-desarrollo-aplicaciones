function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
    console.log(name);
    }
    return displayName;
   }
   const myFunc = makeFunc();
   myFunc();

/* Se crea una funcion anidada, la cual
tendra una constante la cual se mostrara
dentro de la funcion anidada a traves de 
la consola. Luego se aprecia como es que 
se invoca a esta funcion anidada. */

