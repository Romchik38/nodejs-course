'use strict';

const { realpath } = require('fs');

realpath('./1.txt', 'utf8', (err, path) => {
  if (err) throw err;
  console.log({ path });
});
