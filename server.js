'use strict';

const test = require('tape');
const express = require('express');
const app = express();

app.get('', (req, res) => {
   res.end('holla!');
})

app.listen(3000);



   
