'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.alloc(5);

console.log(buf.byteLength);
console.log(buf.length);
