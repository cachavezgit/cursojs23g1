import * as inquirer from 'inquirer';

inquirer.prompt([
    {
        "name": "name",
        "message": "What is your name?"
    },
    {
        "name": "age",
        "message": "¿What is your age?"
    },
    { 
        "type": "confirm",
        "name": "confirm",
        "message": "Are you sure????"
    }
]).then((answers:any) => {
    console.log(`Hello, ${answers.name}! Your age is ${answers.age} and you are ${answers.confirm? "confirmed" : "not confirmed"}`);
});