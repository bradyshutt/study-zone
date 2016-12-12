'use strict';

const test = require('tape');

const http = require('http');

http.createServer((req, res) => {
   res.end('hello!');
}).listen(3000);

   
