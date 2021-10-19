'use strict';

const { rename } = require('fs');

rename('./1.txt', './one.txt', (err) => {
  if (err) throw err;
  console.log('file renamed');
});
