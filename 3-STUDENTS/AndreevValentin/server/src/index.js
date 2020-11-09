const express = require("express");
const fs = require("fs");
const util = require("util");

const server = express();
server.use(express.json());

const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

const catalogFile = "./src/db/catalog.json";
const cartFile = "./src/db/cart.json";

server.get("/catalog", async (req, res) => {
	const data = await fsReadFile(catalogFile);
	res.header("Content-Type", "application/json").send(data);
});

server.get("/cart", async (req, res) => {
	const data = await fsReadFile(cartFile);
	res.header("Content-Type", "application/json").send(data);
});

server.put("/cart/:id", async (req, res) => {
	let data = JSON.parse(await fsReadFile(cartFile));
	const index = data.findIndex(item => item.id == req.params.id);
	if(index == -1) {
		data.push(req.body);
	} else {
		data[index] = req.body;
	}
	console.log(cartFile, JSON.stringify(data));
	await fsWriteFile(cartFile, JSON.stringify(data));
	res.send();
});

server.delete("/cart/:id", async (req, res) => {
	let data = JSON.parse(await fsReadFile(cartFile));
	const index = data.findIndex(item => item.id == req.params.id);
	data.splice(index, 1);
	console.log(cartFile, JSON.stringify(data));
	await fsWriteFile(cartFile, JSON.stringify(data));
	res.send();
})

server.listen(3300, () => {
	console.log("Listening");
});
