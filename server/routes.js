'use strict';

const User = require('./models/user');
const config = require('../config');

module.exports = function (app) {

  app.get('/api/users', (req, res) => {
    User.find()
       .then(res.json)
       .catch(res.send)
  });

  app.get('', (req, res) => {
    res.sendFile(config.indexFile)
  })

};



