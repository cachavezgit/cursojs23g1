function testAvailability() {
    let y = "I'll return";
    console.log("Available here:", y);
    return y;
}

let z = testAvailability();

console.log("Outside the function:", z);
//console.log("Not available here:", y);
