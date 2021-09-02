'use strict'

var express = require('express');
var bodyParser = require('body-parser');

//**** Express (http)

var app = express();

//**** Ficheros ruta:

var article_routes = require('./routes/article');

//Middlewares:

//Cargamos el bodyParser:
app.use(bodyParser.urlencoded({ extended: false }));

//Cualquier tipo de petición lo convertimos a json:
app.use(bodyParser.json());

//Activar el CORS para permitir peticiones AJAX y HTTP desde el frontend.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Cargamos los archivos de ruta
app.use('/api', article_routes);

module.exports = app;