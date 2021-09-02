'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = Schema({

	title: String,
	description: String,
	date: {type: Date, default: Date.now},
	content: String,
	author: String,
	archiveDate: {type: Date, default: null}

});

module.exports = mongoose.model('Article', ArticleSchema);



