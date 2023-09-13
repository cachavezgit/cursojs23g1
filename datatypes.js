let nombre = "Juan";
let direccion = 'Calle 1';
let telefono = `1234567890`;

let mensaje = `Hola, ${nombre}, ${direccion}, ${telefono}.`;

console.log(typeof(nombre));
console.log(typeof(direccion));
console.log(typeof(telefono));

console.log(mensaje);

console.log("Este código se está \n ejecutando en \t\t \"México\"");

let intNr = -1;
let decNr = -1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5

console.log(intNr);
console.log(decNr);
console.log(expNr);
console.log(octNr);
console.log(hexNr);
console.log(binNr);

console.log(typeof(intNr));
console.log(typeof(decNr));
console.log(typeof(expNr));
console.log(typeof(octNr));
console.log(typeof(hexNr));
console.log(typeof(binNr));

let bigInt = 1234567890123456789012345n;
console.log(typeof(bigInt));
console.log(bigInt);

let bool2 = true;
console.log(typeof(bool2));

bool2 = 0;
console.log(typeof(bool2));

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log(typeof(sym1));

console.log("These two Symbols are the same:", sym1 === sym2);

let nuevodato;
console.log(nuevodato);
console.log(typeof(nuevodato));

let cliente = null;

let nr1 = null;
let nr2 = "22";
console.log(nr1 * nr2);

console.log(Number(nr1) + Number(nr2));

