"use strict";

const util = require('util');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

let getRandomNumber = (min, max) => {
	min = min || 0;
	max = max || 0;
	return min + Math.floor(Math.random() * 100000 % (max - min));
}

let getRandomColor = () => {
	let red = getRandomNumber(0, 255);
	let green = getRandomNumber(0, 255);
	let blue = getRandomNumber(0, 255);

	return `rgb(${red},${green},${blue})`;
}

const color = getRandomColor();

app.get('/', (req, res, next) => {
	let page = `<!DOCTYPE html><html><head><title>DummyPage - ${color}</title><style>body{background-color: ${color};}</style></head><body></body></html>`

	res.send(page);
});

app.listen(port, () => {
	console.log('Magic happens at http://localhost:' + port);
});
