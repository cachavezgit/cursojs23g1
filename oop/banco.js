class CuentaBancaria {
    constructor(numeroDeCuenta, titular) {
        this.numeroDeCuenta = numeroDeCuenta;
        this.titular = titular;
    }

    imprimeDetallesCuentaBancaria() {
        console.log(`Numero de cuenta: ${this.numeroDeCuenta}`);
        console.log(`Titular: ${this.titular}`);
    }
}

class CuentaDeInversion extends CuentaBancaria { 
    constructor(numeroDeCuenta, titular, saldo, tasaDeInteres) {
        super(numeroDeCuenta, titular);
        this.saldo = saldo;
        this.tasaDeInteres = tasaDeInteres;
    }

    calcularInteres() { 
        console.log(`Calculando interés con la sasa de interes: ${this.tasaDeInteres}`);
    }

    imprimeDetallesCuentaBancaria () {
        super.imprimeDetallesCuentaBancaria();
        console.log(`Saldo: ${this.saldo}`);
        console.log(`Tasa de interes: ${this.tasaDeInteres}`);
    }

}

class TarjetaDeCredito extends CuentaBancaria { 
    constructor(numeroDeCuenta, titular, limiteDeCredito, fechaDeCorte) {
        super(numeroDeCuenta, titular);
        this.limiteDeCredito = limiteDeCredito;
        this.fechaDeCorte = fechaDeCorte;
    }

    autorizarCompra(monto) {
        if (monto <this.limiteDeCredito) {
            console.log('La compra está autorizada');
        } else {
            console.log('La compra no está autorizada');
        }
    } 

    imprimeDetallesCuentaBancaria() {
        super.imprimeDetallesCuentaBancaria();
        console.log(`Limite de crédito: ${this.limiteDeCredito}`);
        console.log(`Fecha de corte: ${this.fechaDeCorte}`);
    }
}

const cb = new CuentaDeInversion(123456789, 'Juan', 100, 0.01);
const tc = new TarjetaDeCredito(123456789, 'Mar', 100000, new Date());

cb.imprimeDetallesCuentaBancaria();
tc.imprimeDetallesCuentaBancaria();