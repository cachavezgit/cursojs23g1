let nr1 = 2;
let nr2 = 3;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 / nr2;
let result2 = str1 / nr3;

let result3 = nr1 ** str1;
console.log(result1, result2, result3);


nr1 = 4;
nr2 = 5;
nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);

console.log(nr1);
console.log(nr2);
console.log(nr3);

let compara1 = "abc";
let compara2 = 'xyz';

if (compara1 != compara2) {
    console.log("diferentes");
} else {
    console.log("no diferentes");
}