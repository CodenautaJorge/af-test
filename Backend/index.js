'use strict'

var mongoose = require('mongoose');
var app = require('./app');

//indicamos el puerto para ejecutar la aplicación (localhost:3900):
var port = 3900;

//Dirección a la base de datos:
var url = 'mongodb://localhost:27017/api_rest_test_allfunds';

//Configuración para evitar fallos en la conexión con mongoDB
mongoose.Promise = global.Promise;

//Forzamos que los métodos antiguos de mongodb se desactiven y podamos utilizar los nuevos
mongoose.set('useFindAndModify', false);

//Nos conectamos a mongoDB. Opción { useNewUrlParser: true } para utilizar las últimas funcionalidades de mongoDB
mongoose.connect(url, { useNewUrlParser: true }).then(() =>{

	console.log('Conexión con la BDD realizada con éxito!!!');

	app.listen(process.env.PORT || port, () =>{
		console.log('servidor ejecutándose en http://localhost:' + port );
	});

});