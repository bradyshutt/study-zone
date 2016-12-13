'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    unique: true
  },

  firstName: {
    type: String,
    default: '',
    //required: true
  },

  lastName: {
    type: String,
    default: '',
    //required: true
  },

  email: {
    type: String,
    default: '',
    //required: true
  },

  password: {
    type: String,
    required: true
  }

});

