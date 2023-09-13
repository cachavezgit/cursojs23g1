const fs = require('fs');
let frutas = [];

let frutasCSV = fs.readFileSync('C:\\Users\\cachavez\\CursoJS\\loops\\frutas.txt', 'utf-8');
console.log(typeof(frutasCSV));
console.log(frutasCSV);

frutas = frutasCSV.split(',');  // Devolver cada elemento en un arreglo

//for(let i=0; i<frutas.length; i++){
//    console.log(frutas[i]);
//}

for(let frutita of frutas){
    console.log(frutita);
}

console.log(frutas);
