'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const path = require('path');

const config = require('./config');
const apiRouter = require('./server/routes');

const port = global.process.env.PORT || 3000;
const app = express();

mongoose.connect(config.db.url);
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.use('/scripts', express.static(path.join(__dirname, 'node_modules/')));
app.use(express.static(path.join(__dirname, '/app')));
app.use(express.static(__dirname));

app.get('', (req, res) => {
  res.sendFile(config.indexFile);
});


app.listen(port);

exports = module.exports = app;


   
