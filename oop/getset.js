const prompt = require('prompt-sync')();

class Triangulo {
    #base;
    #altura;

    constructor(base, altura) {
        console.log("Se ejecutó el constructor de la clase Triangulo");
        this.#base = base;
        this.#altura = altura;
    }

    get base() {
        console.log("Se ejecutó el getter de la base de la clase Triangulo");
        return `${this.#base}`;
    }   

    set base(value) {
        console.log("Se ejecutó el setter de la base de la clase Triangulo");
        this.#base = value;
    }

    get altura() {
        console.log("Se ejecutó el getter de la altura de la clase Triangulo");
        return `${this.#altura}`;
    }
    
    set altura(value) {
        console.log("Se ejecutó el setter de la altura de la clase Triangulo");
        this.#altura = value;
    }

    imprimeDetallesTriangulo() {
        console.log(`La base del triangulo es: ${this.#base}`);
        console.log(`La altura del triangulo es: ${this.#altura}`);
    }   

}

const base = prompt("Ingrese la base del triangulo: ");
const altura = prompt("Ingrese la altura del triangulo: ");

const triangulo = new Triangulo(base, altura);

triangulo.base=++triangulo.base;
triangulo.altura=++triangulo.altura;

console.log(`De un triangulo de base ${triangulo.base} y altura ${triangulo.altura} los datos son:`);
triangulo.imprimeDetallesTriangulo();