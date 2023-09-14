const express = require('express');

const app = express();
app.use(express.json()); // <---- Para poder leer el body en formato JSON

const nombres = [];

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Agregar un Endpoint
app.get('/clientes/nombres', (req, res) => {
    res.json(nombres);
});

app.post('/clientes/nombres/agregar', (req, res) => {
    nombres.push(req.body.nombre);
    res.json("Nombre agregado correctamente");
});