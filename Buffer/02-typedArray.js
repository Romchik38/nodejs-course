'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.from('1');
const uint8 = new Uint8Array(10);

console.log({ uint8 });
console.log(Object.getPrototypeOf(uint8)); //TypedArray {}

console.log({ buf });
console.log(Object.getPrototypeOf(buf)); //Uint8Array
