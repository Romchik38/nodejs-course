'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.from([0xff]);

console.log({ buf });
console.log({ length: buf.length });
console.log({ '1st': buf[0] });
