'use strict';

const path = require('path');


module.exports = {
  db: {
    url: 'mongodb://localhost/study-zone'
  },
  indexFile: path.join(__dirname, 'index.html')

};
