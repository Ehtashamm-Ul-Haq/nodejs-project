var express = require('express');
require('dotenv').config()
require('./db')
var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRouter);

app.use('*', (req, res)=>{
  res.send('Api not found')
})

module.exports = app;
