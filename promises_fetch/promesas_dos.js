function makePromise(partyPromise) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (partyPromise) {
                resolve("I am giving a party to friends");
            } else {
                reject("I am not given party to friends");
            }
        }, 5 * 1000);
    });
}

const prom = (partyPromise) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(partyPromise){
                resolve("I given party to friends");
            }else{
                reject("I am not given party to friends");
            }
        }, 5 * 1000);
    })
}

/*
let partyPromise = makePromise(true);
partyPromise
   .then(success => console.log(`Es exito: ${success}`))
   .catch(error => console.log(`Es fallido: ${error}`))
   .finally(() => { console.log("I am done"); }); 
   */

makePromise(true).then(success => console.log(`Es exito: ${success}`)).catch(error => console.log(`Es fallido: ${error}`)).finally(() => { console.log("I am done"); }); 
prom(true).then(success => console.log(`Es exito: ${success}`)).catch(error => console.log(`Es fallido: ${error}`)).finally(() => { console.log("I am done"); }); 