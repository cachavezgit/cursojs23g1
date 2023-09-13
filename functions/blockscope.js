'use strict';
let x = 1000; // global scope

uno();
dos();

function uno() {
    {
        let y= 5000;
        console.log(y);
    }
    const z = 8000;
    console.log(z);
    
}

function dos() {
    let x= 2000;
    console.log(x);
    //console.log(z);
}