const fs = require('fs');

let personasArray = [];
let personasObjectArray = [];

let personas = fs.readFileSync('C:\\Users\\cachavez\\CursoJS\\loops\\personas.txt', 'utf-8').trim();
console.log(typeof(personas));
console.log(personas);

personasArray = personas.split('\n');
console.log(personasArray);

for (let persona of personasArray) {
    let datosPersona = persona.split(',');

    let registro = {
        id: datosPersona[0],
        nombre: datosPersona[1],
        ciudad: datosPersona[2],
        rol: datosPersona[3]
    }
    personasObjectArray.push(registro);
}

for(let persona of personasObjectArray) { // <------ se recorre un arreglo elemento por elemento
    
    let propiedades = Object.keys(persona); 
    console.log(propiedades); 

    for (let propiedad in persona) {  // <----- se recorre un objeto propiedad a propiedad
        console.log(`${propiedad} ----> ${persona[propiedad]}`);
    }
}

//console.log(personasObjectArray);



