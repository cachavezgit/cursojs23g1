const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

// slice (start, end)
const year = [...q1.slice(0,2), ...q2, ...q3, ...q4, "Mes13", "Mes14", "Mes15"];

console.log(year);

const arreglo1 = [90,40];
const arreglo2 = [80,60];

const resultado = sumarNumeros(...arreglo1,...arreglo2);
console.log(resultado);

function sumarNumeros(number1, number2, number3, number4) {
    return number1 + number2 + number3 + number4;
}

