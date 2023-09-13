exports.suma = (a, b) => a + b;
exports.elevarAlCuadrado = (a) => a * a;
//exports.promedioArray = (array) => array.reduce(total) / array.length;
exports.promedioArray = (array) => array.reduce((suma, numero) => suma + numero, 0)/array.length;
 
exports.saludaUsuario = (usuario) =>{
    return `Hola ${usuario}!`;
}

exports.mayorDeLosNumeros = (array)  => {
    return Math.max(...array);
}

//module.exports = {suma,elevarAlCuadrado, promedioArray, saludaUsuario, mayorDeLosNumeros};