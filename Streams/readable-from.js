'use strict';

const { Readable } = require('stream');

const names = ['ser', 'rom', '20'];

const rs = Readable.from(names);

rs.on('data', chunk => {
  console.log(chunk);
});
