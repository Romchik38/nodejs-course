'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.alloc(4, 0);
console.log({ buf });

buf[0] = 1;
buf[1] = 1;
console.log({ buf });

const readUint16 = buf.readUint16LE(0);
console.log({ readUint16 });
