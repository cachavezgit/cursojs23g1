const express = require('express');
const mysql = require("mysql");

const app = express();

app.use(express.json()); // <---- Para poder leer el body en formato JSON

//const nombres = [];

const db = mysql.createConnection({

    host: "cachavezmysql.mysql.database.azure.com",

    user: "cachavez",

    password: "Pa$$w0rd5678",

    database: "cursomat",

});

db.connect((err) => {

    if (err) {

        throw err;

    }

    console.log("MySql Connected");

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Agregar un Endpoint
app.get('/clientes/nombres', (req, res) => {
    let sql = "SELECT * FROM nombres";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

app.post('/clientes/nombres/agregar', (req, res) => {
    let nombre = req.body.nombre;
    let sql = "INSERT INTO nombres (nombre) VALUES (?)";
    db.query(sql, [nombre], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    res.json("Nombre agregado correctamente");
});