const fs = require('fs');
let resultado = {};
fs.readFile('C:\\Users\\cachavez\\CursoJS\\jsasyncyajax\\big.txt', 'utf8', (err, data) => { 
    if (err) {
        console.log(`Ocurrio un error al leer el archivo: ${err.message} `);
        return;
    }

    Object.assign(resultado, data);
})

console.log("Finished reading");
console.log(resultado);