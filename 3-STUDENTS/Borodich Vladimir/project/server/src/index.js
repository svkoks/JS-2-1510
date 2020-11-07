const express = require('express');
const DB = require('./db');
let db = null;
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Test server run</h1> ');
});

server.get('/catalog', (req, res) => {
    res.json(db.catalog);
});

server.get('/catalog/:category', (req, res) => {
    const params = req.params;
    console.log('Send category : ', params.category);
    res.json(db.getCategoryCatalog(params.category));
});

server.get('/basket', (req, res) => {
    res.json(db.basket);
});

server.put('/basket/:action', (req, res) => {
    const params = req.params;
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    console.log('Basket action : ', params);
    console.log('Basket data : ', req.body);
    res.json(db[params.action]('basket', req.body));
    
});

server.listen(3300, () => {
    db = new DB();
    console.log('PORT 3300');
});
