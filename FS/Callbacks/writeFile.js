'use strict';

const { writeFile } = require('fs');
const { Buffer } = require('buffer');

const buf = Buffer.from('12');
const arr32 = new Int32Array(buf);
console.log({ buf });
console.log({ arr32 });

writeFile('./1.txt', buf, (err) => {
  if (err) throw err;
  console.log('file written');
});
