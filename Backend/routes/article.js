//Archivo de rutas para la app
'use strict'

var express = require('express');

var Article = require('../controllers/article');

//Llamamos al objeto router de express:
var router = express.Router();

//Rutas para artículos***********************************************************************************

//Guardar un nuevo artículo.
router.post('/save', Article.save);

//Obtener todos los artículos sin archivar.
router.get('/articles', Article.getArticles);

//Obtener todos los artículos archivados.
router.get('/archived', Article.getArchived);

//Archivamos un artículo. Le pasamos el parámetro :id como obligatorio.
router.put('/article-archive/:id', Article.archive);

//Eliminar un artículo. Le pasamos el parámetro :id como obligatorio.
router.delete('/article-delete/:id', Article.delete);

module.exports = router;

