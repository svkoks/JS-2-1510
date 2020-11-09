const express = require("express");
const fs = require("fs");
const util = require("util");

const server = express();
server.use(express.json());

const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

server.get("/catalog", async (req, res) => {
	const data = await fsReadFile("./src/db/catalog.json");
	res.header("Content-Type", "application/json").send(data);
});

server.get("/cart", async (req, res) => {
	const data = await fsReadFile("./src/db/cart.json");
	res.header("Content-Type", "application/json").send(data);
});

server.put("/cart/:id", (req, res) => {
	console.log("put", req.params.id, req.body);
	res.send("");
});

server.delete("/cart/:id", (req, res) => {
	console.log("delete", req.params.id);
	res.send("");
})

server.listen(3300, () => {
	console.log("Listening");
});
