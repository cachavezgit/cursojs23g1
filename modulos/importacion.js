const loexportado = require('./exportacion.js');
const tipos = require('./exportacionclases.js');

const tabla = [8,4,5,6,7,8,9,10,11,12];

console.log(loexportado.promedioArray(tabla));
console.log(loexportado.suma(90,87));

console.log(loexportado.saludaUsuario("Ivan"));
console.log(loexportado.mayorDeLosNumeros(tabla));

console.log(`El valor de PI es ${tipos.PI}`);

const cuadrado1 = new tipos.Cuadrado(5);
console.log(cuadrado1.calcularArea());

