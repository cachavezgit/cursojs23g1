const PI = Math.PI;

class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }

}

module.exports = { Cuadrado, PI };