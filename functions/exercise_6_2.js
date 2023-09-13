const prompt = require('prompt-sync')();

const adj = ["super", "wonderful", "bad", "angry", "careful"];

myFun();

function myFun() {
    const question = prompt("What is your name?");
    const nameAdj = Math.floor(Math.random() * adj.length);
    console.log(adj[nameAdj] + " " + question);
}
