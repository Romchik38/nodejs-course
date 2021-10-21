'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.from('1sa-qq');

console.log({ buf });
buf.find((elem) => {
  console.log(String.fromCodePoint(elem));
});

const b1 = buf.slice(1, 2);
console.log({ b1 });
b1[0] = 2;
console.log({ buf });
