let persona1 = {
    Nombre: "Juan",
    Apellidos: "Perez",
    Edad: 25,
    Sexo: "Hombre"
};

let persona2 = {
    Nombre: "Juan",
    Apellidos: "Perez",
    Direccion: "Calle 123",
    Edad: 25,
    Sexo: "Hombre"
};

// "Clase Dog"
function Dog1(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}

class Dog2 {
    constructor (d, w, c, b) {
        this.dogName = d;
        this.weight = w;
        this.color = c;
        this.breed = b;
    }
}

class Persona2 {
    //constructor (nombre, apellidos) {
    //    this.nombre = nombre;     // <----- no puede haber más de un constructor
    //    this.apellidos = apellidos;
    //}

    constructor (nombre='', apellidos='', direccion='', edad=0, sexo='') {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() { 
        console.log(`Hola soy ${this.nombre} ${this.apellidos}`);
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
    }

}
let persona3 = new Persona2("Juan", "Perez");
let persona4 = new Persona2("Maria", "Roiz", "Calle 12", 25, "Hombre");

let perro1 = new Dog2("Perro", 10, "Rojo", "Chihuahua");

console.log(JSON.stringify(persona1));
console.log(JSON.stringify(persona2));
console.log(JSON.stringify(persona3));
console.log(JSON.stringify(persona4));
console.log(JSON.stringify(typeof persona4));
console.log(JSON.stringify(perro1));
console.log(JSON.stringify(typeof perro1));

persona4.saludar("Este es un saludo");
persona4.saludar();
console.log(persona4.nombreCompleto());

console.log(`${perro1.dogName} ${perro1.weight} ${perro1.color} ${perro1.breed}`);

