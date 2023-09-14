const getPaises = async () => {

    try {
        const response = await fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "05b37d25a6msh52f04c347257d2bp167eb7jsna8e4fd0f7bca"
            }
        });

        console.log(response.status); // <---- revisar si tuvimos un 200

        const jsonResponse = await response.json();

        return jsonResponse.data;
    }
    catch (error) {
        console.log(`Ocurrió un error: ${error.message}`);
    }
    finally {
        console.log('Finalizo');
    }
}

const muestraPaises = async () => {
    const info_paises = await getPaises();
    console.log(typeof info_paises);
    console.log(info_paises);
};

/*$("#ejecutaPaises").on("click", async () => {
    console.log("Ejecutando paises");
    await muestraPaises();
});*/

(async () =>{
    await muestraPaises();
})();

$(document).ready(async () => {
    await muestraPaises();
});
  