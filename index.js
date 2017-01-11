"use strict";

const util = require('util');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
	let page = "<h1>Enviromental variables:</h1>";
	page += "<table>"
	page += Object.keys(process.env).map((item) => {
		return `<tr><td>${item}</td><td>${process.env[item]}</td><tr>`
	}).join("");
	page += "</table>"

	res.send(page);
});

app.listen(port, () => {
	console.log('Magic happens at http://localhost:' + port);
});
