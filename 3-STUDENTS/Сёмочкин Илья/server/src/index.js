const express = require('express');
const fs = require('fs');

const writer = require('./utils/writer.js');
const Cart = require('./service/cart-service.js');
const server = express();
server.use(express.json());

server.get('/catalog', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/catalog.json', 'utf-8'));
    res.json(data);
});

server.get('/catalogMen', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/catalogMen.json', 'utf-8'));
    res.json(data);
});

server.get('/catalogWomen', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/catalogWomen.json', 'utf-8'));
    res.json(data);
});

server.get('/cart', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./src/db/cart.json', 'utf-8'));
    res.json(data);
});

server.post('/cart', (req, res) => {
    let cart = JSON.parse(fs.readFileSync('./src/db/cart.json', 'utf-8'));
    let newCart = Cart.add(cart, req.body);

    writer('./src/db/cart.json', newCart)
    .then(status => {
        if(status) {
            res.json({ status: 1});
        } else {
            res.sendStatus(500);
        }
    })
})

server.put('/cart/:id', (req, res) => {
    let cart = JSON.parse(fs.readFileSync('./src/db/cart.json', 'utf-8'));
    let newCart = Cart.change(cart, req.params.id, req.body.amount);

    writer('./src/db/cart.json', newCart)
    .then(status => {
        if(status) {
            res.json({ status: 1 });
        } else {
            res.sendStatus(500);
        }
    })
})

server.delete('/cart/:id', (req, res) => {
    let cart = JSON.parse(fs.readFileSync('./src/db/cart.json', 'utf-8'));
    let newCart = Cart.delete(cart, req.params.id);

    writer('./src/db/cart.json', newCart)
    .then(status => {
        if(status) {
            res.json({ status: 1 });
        } else {
            res.sendStatus(500);
        }
    })
})

server.listen(3300, () => { console.log('PORT: 3300') });