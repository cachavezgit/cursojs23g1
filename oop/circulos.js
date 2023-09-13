const prompt = require('prompt-sync')();

class Circulo {
    #diametro;

    constructor(radio) {
        if (radio <0) {
            console.log("El radio no puede ser negativo");
            return;
        }
        this.#diametro = radio * 2;
    }

    calculaPerimetro() {
        return (Math.PI * this.#diametro).toFixed(2);
    }

    calculaArea() {
        return (Math.PI * Math.pow((this.#diametro/2),2)).toFixed(2);
    }
}

const radioCirculo = prompt("Ingrese el radio del circulo: ");

const circulo = new Circulo(radioCirculo);
console.log(`El perimetro del circulo es: ${circulo.calculaPerimetro()} cm`);
console.log(`El area del circulo es: ${circulo.calculaArea()} cm`);
