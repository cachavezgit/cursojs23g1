const fs = require('fs').promises;

fs.readFile('C:\\Users\\cachavez\\CursoJS\\jsasyncyajax\\big.txt', 'utf-8')
    .then((data) => { console.log(data);})
    .catch((err) => { console.log(`Ocurrio un error ${err.message}`);});