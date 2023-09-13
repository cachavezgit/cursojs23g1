"use strict";
let numero = 3;

const elevaAlCubo = function(numero = 0) { 
    console.log(`El numero es : ${numero}`);
    return numero * numero * numero;
};

const mayorDeDosNumeros = (numero1, numero2) => numero1 > numero2? numero1 : numero2;
const promedioDelArray = (array) => array.reduce((suma, numero) => suma + numero, 0)/array.length;

console.log(`El cuadrado de ${numero} es: ${elevaAlCuadrado(numero)}`);
console.log(`El cubo de ${numero} es: ${elevaAlCubo(numero)}`);

console.log(generaNombreCompleto());
elevaAlCubo();

console.log(`El mayor de 5 y 3 es: ${mayorDeDosNumeros(5, 3)}`);

console.log(`El promedio de los numeros es: ${promedioDelArray([1,4,8,9,8])}`);

function elevaAlCuadrado(numero) {
    return numero * numero;
}

function generaNombreCompleto(nombre = '', apellido1 = '', apellido2 = '') {
    return `El nombre completo es: ${nombre} ${apellido1} ${apellido2}`;
}


