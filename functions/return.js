let resultsArr = [];

for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, 2 * i);
    resultsArr.push(result);
}

console.log(resultsArr);

function addTwoNumbers(x, y) {
    return x + y;
}