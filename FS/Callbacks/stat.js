'use strict';

const { stat } = require('fs');

stat('./one.txt', (err, data) => {
  if (err) throw err;
  console.log({ data });
});
