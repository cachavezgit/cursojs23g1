
(() => {
    console.log("UNO!");    
    x = "Hola";
    console.log(x);
})();

    (function () {
        console.log("DOS!");
        console.log(x);
    })();

(() => {
    console.log("TRES!");
    console.log(x);
})();