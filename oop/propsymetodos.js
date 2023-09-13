class Matematico {
    #num2;  // <--- si es propiedad privada se tienen que agregar la declaración con #

    constructor(num1, num2) {
        if (num1 <0 || num2 <0) {
            console.log("Los numeros no pueden ser negativos");
            return;
        }
        this.num1 = num1;
        this.#num2 = num2;  // <---- campo Private por usar el símbolo #
    }

    suma() {
        return this.num1 + this.#num2;
    }

    resta() {
        return this.num1 - this.#num2;
    }
}

const matematico = new Matematico(-10, -20);

console.log(`usando ${matematico.num1} y ${matematico.num2} la suma y la resta son: `);
console.log(matematico.suma());
console.log(matematico.resta());