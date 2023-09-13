const mayorDeDosNumeros = (numero1, numero2) => numero1 > numero2? numero1 : numero2;

const promedioDelArray = (array) => array.reduce((suma, numero) => suma + numero, 0)/array.length;

const validaElementsDelArreglo = (arreglo, condicion) => arreglo.every(elemento => condicion(elemento));

const array = [2, 4, 6, 8, 10, 12, 14, 16, 18];
console.log(`Los elementos del arreglo son todos pares: ${validaElementsDelArreglo(array, (elemento) => elemento % 2 ===0)}`);
