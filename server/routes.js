'use strict';

const User = require('./models/user');
const config = require('../config');
const userRoutes = require('./routes/user-routes');
const apiRouter = require('express').Router();


apiRouter.get('/', (req, res) => {
  res.json({
    message: 'welcome to the API! :-)'
  });
});

apiRouter.use('/users', userRoutes);


module.exports = apiRouter;
