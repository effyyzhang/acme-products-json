const express = require('express');
const path = require('path');
const db = require('./db');
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html' ));
})

app.get('/api/product', function (req, res) {
    try{
        res.send(await db.findAll());
    }
    catch(ex){
        next(ex);
    } 
  })


 
app.listen(3000)