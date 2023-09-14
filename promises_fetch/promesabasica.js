let partyPromise = false;

let giveParty = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (partyPromise) {
            resolve("I given party to friends");
        } else {
            reject("I am not given party to friends");
        }
    }, 5 * 1000);
});

console.log(giveParty);