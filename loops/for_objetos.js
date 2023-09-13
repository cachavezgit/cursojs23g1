tablaDeNumeros = [];

for (let numero = 1;numero<10;numero++) {
    let esPar = numero % 2 === 0;

    // Se arma un objeto dinámico con el número y si es par o impar
    let objeto = {
        numero: numero,
        esPar: esPar
    }

    tablaDeNumeros.push(objeto);
}

console.log(tablaDeNumeros);