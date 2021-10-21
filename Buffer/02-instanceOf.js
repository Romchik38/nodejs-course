'use strict';

const { Buffer } = require('buffer');

const buf = Buffer.from('a203', 'hex');

console.log({ buf });
console.log('buf instanceof Uint8Array:', buf instanceof Uint8Array );
