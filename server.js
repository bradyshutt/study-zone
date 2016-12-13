'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const path = require('path');

const config = require('./config');
const port = global.process.env.PORT || 3000;
const app = express();

mongoose.connect(config.db.url);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(path.join(__dirname, 'node_modules/')));
app.use(express.static(path.join(__dirname, '')));

require('./server/routes')(app);

app.listen(port);


exports = module.exports = app;


   
