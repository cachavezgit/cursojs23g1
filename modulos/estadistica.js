// IIFE
const estadistica = (function() {
    const suma = (x,y) => x + y;

    function promedio(info) {
        return info.reduce(suma) / info.length;
    }

    return {
        suma, promedio,
    }
}());

console.log(estadistica.suma(4,5));
console.log(estadistica.promedio([1,4,5,6,7]));