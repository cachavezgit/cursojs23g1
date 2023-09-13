let hookId = setInterval(revisarActualizaciones, 2000);
let contador =0;

function revisarActualizaciones() {
    contador ++;
    console.log("Revisando  actualizaciones...");

    if(contador >= 10){
        clearInterval(hookId);
        console.log("Se detuvo el hook de actualizaciones");
    }
}