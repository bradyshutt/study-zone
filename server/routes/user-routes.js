'use strict';

const express = require('express');
const userRoutes = express.Router();

const User = require('../models/user');


// all users
userRoutes.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/json');
  User.find().exec()
     .then(users => {
       res.setHeader('Content-Type', 'text/json');
       res.json(users)
     })
     .catch(err => {
       console.error(err);
       res.json(err);
     });
});

userRoutes.post('/', (req, res) => {
  let user = new User(req.body);
  console.log(user.validate());
  user.validate()
     .then(valid => user.save())
     .then(success => res.json({message: 'success'}) )
     .catch(err => {
       console.error(err);
       res.json({
         'message': 'Problem creating user',
         'reason': getErrorReason(err)
       });
     });
});


module.exports = userRoutes;


function getErrorReason(err) {
  let code = err.code;
  if (code === 11000) return 'Duplicate Key Error';
  else return 'Unknown Reason';
}



