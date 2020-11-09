const express = require('express');
const server = express();

const DB = require('./db');
const BasketService = require('./db/service/basket.js');
const Logger = new (require('./logger'))(' SERVER ');
let db = null;
let basketService = null;

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Test server run</h1> ');
});

server.get('/catalog', (req, res) => {
    Logger.info('Get / catalog ');
    res.json(db.catalog);
});

server.get('/catalog/:category', (req, res) => {
    const params = req.params;
    Logger.info('Get / catalog/', params.category);
    res.json(db.getCategory(params.category));
});

server.get('/basket', (req, res) => {
    Logger.info('Get / basket ');
    res.json(db.basket);
});

server.post('/basket', async (req, res) => {
    Logger.info('POST / basket   ');
    await basketService.add(req.body.id, req.body.amount);
    res.json(db.basket);
});

server.put('/basket/:action', async (req, res) => {
    Logger.info('PUT / basket/%s/%s', req.params.action, req.body.id);
    await basketService.update(req.body.id, req.params.action, req.body.amount);
    res.json(db.basket);
});

server.delete('/basket/:id', async (req, res) => {
    Logger.info('DELETE / basket/%s', req.params.id);
    if (req.params.id !== 'all') await basketService.delete(req.params.id);
    else await basketService.clear();
    res.json(db.basket);
});

server.listen(3300, () => {
    db = new DB();
    basketService = new BasketService(db);
    Logger.info('DB server run on port : 3300');
});
