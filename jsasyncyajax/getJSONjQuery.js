/*$.getJSON("https://wft-geo-db.p.rapidapi.com/v1/geo/countries", function(data) {
    let resultado = [];
    $.each(data, function(llave, valor) {
        resultado.push(`llave: ${llave}, valor: ${valor.name}`);
    })
})*/

$.ajax({
    dataType: "json",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",
    method: "GET",
    headers: { 
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "05b37d25a6msh52f04c347257d2bp167eb7jsna8e4fd0f7bca"
    },
    async: true,
    success: function(response) { 
        //console.log(response.data);
        response.data.forEach(pais => { 
            //console.log(pais.name);
           $('#paises').append(`<li>${pais.name}</li>`);
        });
    },
    error: function(error) {
        console.log(error.responseJSON);
    }
});