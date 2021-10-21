'use strict';

const { Buffer } = require('buffer');

const name = Buffer.from([0x53, 0x65, 0x72]);
const name2 = Buffer.from([0xff, 0xff, 0xaa]);
const spider = Buffer.from([0xf0, 0x9f, 0x95, 0xb7]);

console.log({ name, name2, spider });

console.log(name.toString());
console.log(name.toString('hex'));
console.log(name.toString('base64'));
console.log(name.toString('utf8'));
console.log({ name2: name2.toString() });
console.log({ spider: spider.toString('utf8') });
