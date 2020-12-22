const express = require('express');
const fs = require('fs');
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send('<h3>This is the main page</h3>')
});

server.get("/catalog", (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/catalog.json', 'utf-8'))
    res.json(data);
});

server.get("/basket", (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/basket.json', 'utf-8'))
    res.json(data);
});

server.listen(3030, () => {
    console.log('port is running at 3030')});

