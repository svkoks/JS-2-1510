const express = require('express');
const server = express();
const path = require('path');
const fs = require('fs');

const DB = require('./db');
const BasketService = require('./db/service/basket.js');
const Logger = new (require('./logger'))(' SERVER ');
let db = null;
let basketService = null;

 server.use(express.static(path.resolve(__dirname, '../..', 'dist')));

server.use(express.json());

server.get('/', async (req, res) => {
    let result = '';
    try {
      result = fs.readFileSync(path.resolve(__dirname, '../..', 'dist', 'index.html'), { encoding: 'utf-8' })
    } catch (error) {
        result = error.message;
        Logger.error(result)
    }
    res.send(result);
});

server.get('/api/catalog', (req, res) => {
    Logger.info('Get / catalog ');
    res.json(db.catalog);
});

server.get('/api/catalog/:category', (req, res) => {
    const params = req.params;
    const query = req.query;
    Logger.info('Get / catalog/%s?%s', params.category, query);
    res.json(db.getCategory(params.category, query));
});

server.get('/api/basket', (req, res) => {
    Logger.info('Get / basket ');
    res.json(db.basket);
});

server.post('/api/basket', async (req, res) => {
    Logger.info('POST / basket   ');
    await basketService.add(req.body.id, req.body.category, req.body.amount);
    res.json(db.basket);
});

server.put('/api/basket/:action', async (req, res) => {
    Logger.info('PUT / basket/%s/%s/%s', req.params.action, req.body.id, req.body.amount);
    await basketService.update(req.body.id, req.params.action, req.body.amount);
    res.json(db.basket);
});

server.delete('/api/basket/:id', async (req, res) => {
    Logger.info('DELETE / basket/%s', req.params.id);
    if (req.params.id !== 'all') await basketService.delete(req.params.id);
    else await basketService.clear();
    res.json(db.basket);
});

server.get('/api/product/:id', (req, res) => {
    Logger.info('Get /product/', req.params.id);
    res.json(db.getProduct(req.params.id));
});

server.listen(3300, () => {
    db = new DB();
    basketService = new BasketService(db);
    Logger.info('DB server run at : -Local: http://localhost:3300/');
});
