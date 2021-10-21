'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.from([1, 5000]);
console.log({ buf });

const buf1 = Buffer.alloc(10);
console.log({ buf1 });
const uint16 = new Uint16Array(buf1);
console.log({ uint16 });
uint16[0] = 5000;
console.log({ buf1 });
console.log({ uint16 });
console.log(uint16.buffer);

const buf2 = Buffer.from(uint16.buffer);
console.log({ buf2 });
