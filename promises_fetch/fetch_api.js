function ObtenPaisesPromises() {
    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "05b37d25a6msh52f04c347257d2bp167eb7jsna8e4fd0f7bca"
        }
    }).then((response) => {
        response.json().then((json) => {
            json.data.forEach(pais => {
                console.log(pais.name);
            });
        }).catch((error) => { 
            console.log(`Ocurrio un error al procesar el json: ${error.message}`);
        })
    }).catch((error) => {
        console.log(`Ocurrio un error al obtener las paises: ${error.message}`);
    }).finally(() => {
        console.log('Finalizo');
    });

}

ObtenPaisesPromises();