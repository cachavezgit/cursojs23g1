let mensaje:string = 'Hello World!';

let x:number = 10;
let y:number = 30;

let bandera:boolean = true;

let numerote:bigint = 100000000000000000n;

console.log(mensaje);

function suma(a:number, b:number):number {
    return a + b;
}

function imprimeMensaje(mensaje:string):void {
    console.log(mensaje);
}

const mayorDeLosNumeros = function (a:number, b:number):number { 
    return 5;
}

const elevaAlCuadrado = (num:number) => {
    return Math.pow(num, 2);
};

let resultado:number = suma(x, y);

console.log(resultado);