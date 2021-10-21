'use strict';

const { Buffer } = require('buffer');
const { writeFile } = require('fs/promises');

const name = Buffer.from([0x53,0x65,0x72]);

console.log({ name });

writeFile('1.txt', name)
