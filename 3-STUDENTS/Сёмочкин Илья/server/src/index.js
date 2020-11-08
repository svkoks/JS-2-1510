const express = require('express');
const fs = require('fs');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.json({a: 100, b: 200});
})

server.get('/catalog', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/catalog.json', 'utf-8'));
    res.json(data);
});

server.get('/cart', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/cart.json', 'utf-8'));
    res.json(data);
});

server.listen(3300, () => { console.log('PORT: 3300') });