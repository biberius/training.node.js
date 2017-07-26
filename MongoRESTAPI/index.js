'use strict';
//Express instance
const express = require('express');
const app = express();
//MongoDB instance
const mongo = require('mongodb').MongoClient;
const url = "mongodb://user:password@ds041494.mlab.com:41494/trainingnodejs";
//UUID instance
const uuidv4 = require('uuid/v4');
//Orders instance
const orders = require('./modules/orders.js');
//Products instance
const products = require('./modules/products.js');

mongo.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database connected!");
});

app.put('/products', function (req, res) {
    res.end('Products PUT not implemented yet');
})

app.post('/products', function (req, res) {
    res.end('Products POST not implemented yet');
})

app.delete('/products', function (req, res) {
    res.end('Products DELETE not implemented yet');
})

app.get('/products', function (req, res) {
    res.end('Products GET not implemented yet');
})

app.put('/orders', function (req, res) {
    res.end('Orders PUT not implemented yet');
})

app.post('/orders', function (req, res) {
    res.end('Orders POST not implemented yet');
})

app.delete('/orders', function (req, res) {
    res.end('Orders DELETE not implemented yet');
})

app.get('/orders', function (req, res) {
    res.end('Orders GET not implemented yet');
})

app.listen(3000, function () {
  console.log('Server is up at http://localhost:3000')
})