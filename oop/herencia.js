class Flor {
    constructor(name) {
        this.name = name;
    }

    fotosintesis(){
        console.log(`Ejecutando el proceso de fotosintesis de ${this.name}`);
    }
}

class Rosa extends Flor {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    espinar() {
        console.log(`No hay rosa sin espinas...`);
    }
}

const flor1 = new Flor('Flor 1');
flor1.fotosintesis();

const flor2 = new Flor('Flor 2');
flor2.fotosintesis();

const flor3 = new Flor('Flor 3');
flor3.fotosintesis();
//flor3.espinar();

const rosa1 = new Rosa('Rosa 1', 'Rosa');
const rosa2 = new Rosa('Rosa 2', 'Amarilla');

rosa1.fotosintesis();
rosa1.espinar();
rosa2.fotosintesis();
rosa2.espinar();