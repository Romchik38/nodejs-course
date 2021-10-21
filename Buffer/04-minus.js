'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.from([127, -128, 0xfe]);

console.log({ buf });

console.log(buf.readUint8(0));
console.log(buf.readInt8(1));
console.log(buf.readInt8(2));
