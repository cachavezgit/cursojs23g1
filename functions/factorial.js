const prompt = require('prompt-sync')();

const fac = (n) => n>0 ? n*fac(n-1) : 1;

const factorial = (num) => {
    if (isNaN(num) || num < 0 || num > 100) return;

    if (num === 0) return 1;
    if (num === 1) return 1;

    return num * factorial(num - 1);
}

const numero = Number(prompt('Digite um número: '));
console.log(`El factorial de ${numero} es ${factorial(numero)}`);
console.log(`El factorial de ${numero} es ${fac(numero)}`);