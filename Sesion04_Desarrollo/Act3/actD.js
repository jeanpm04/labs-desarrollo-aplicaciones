function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}
function getMonthName(mo) {
 mo--; // Adjust month number for array index (1 = Jan, 12 = Dec)
 const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 if (months[mo] !== undefined) {
 return months[mo];
 } else {
 throw new UserException('InvalidMonthNo');
 }
}
let monthName;
try {
 // statements to try
 const myMonth = 15; // 15 is out of bound to raise the exception
 monthName = getMonthName(myMonth);
} catch (e) {
 monthName = 'unknown';
 console.error(e.message, e.name); // pass exception object to err handler
}

/* Este fragmento de codigo, nos muestra como es
que podemos crear nuestra propia excepcion, y como
es que la usamos. En el ejemplo, se intenta obtener
el nombre de un mes segun su numero, pero se le da
un numero fuera de rango, por lo que retorna un error
todo esto usando try-catch */
