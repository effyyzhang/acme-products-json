const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();

const validator = (item, items) => {
  console.log('hello!')
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html' ));
})

app.get('/api/products', async (req, res, next) => {
    try{
        res.send(await db('product.json', validator).findAll());
    }
    catch(ex){
        next(ex);
    }
  })

  app.post('/api/products', async (req, res, next) => {
    console.log(req)
    try{
        res.send(await db('product.json', validator).create(req.body));
    }
    catch(ex){
        next(ex);
    }
  })



app.listen(3000, () => console.log('listening on 3000'));
