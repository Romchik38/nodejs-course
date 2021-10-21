

'use strict';

const { Buffer } = require('buffer');

const name = Buffer.from('U2Vy', 'base64');

console.log({ name });

console.log(name.toString());
