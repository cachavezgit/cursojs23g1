'use strict';

const prompt = require('prompt-sync')();

nombre = prompt('Escribe tu nombre: ');
console.log(`Hola, ${nombre}. Bienvenido`);  // Usando los backticks para interpolar el valor en la cadena

//const mensaje = "Hola, " + nombre + ". Bienvenido"; NO USAR CONCATENACION EN 2023
//console.log(mensaje);