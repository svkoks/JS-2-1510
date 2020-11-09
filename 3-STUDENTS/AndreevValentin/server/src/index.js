const express = require("express");
const fs = require("fs");

const server = express();

server.get("/catalog", async (req, res) => {
	fs.readFile("./src/db/catalog.json", (err, data) => {
		if(err) {
			throw err;
		}
		res.header("Content-Type", "application/json").send(data);
	});
});

server.get("/cart", async (req, res) => {
	fs.readFile("./src/db/cart.json", (err, data) => {
		if(err) {
			throw err;
		}
		res.header("Content-Type", "application/json").send(data);
	});
});

server.listen(3300, () => {
	console.log("Listening");
});
