let rain = false;

if (rain) {
    console.log("** Taking my umbrella when I need to go outside **");
}
else {
    console.log("** I can leave my umbrella at home **");
}


let age = 90;
let cost = 0;
let message;

if (age < 3) {
    cost = 0;
    message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
    cost = 5;
    message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
    cost = 10;
    message = "A regular ticket costs 10 dollars.";
} else {
    cost = 7;
    message = "A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost " + cost);

nivel = 90;
let acceso = "";
if (nivel >= 50) {
    acceso = "Access granted";
} else {
    acceso = "Access denied";
}

acceso = nivel >= 50 ? "Access granted" : "Access denied";

let activity = "Breakfast";
switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
}