'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.alloc(5);

buf[0] = 1;
console.log(buf.buffer);
