
'use strict';

const { PassThrough } = require('stream');

const pass = new PassThrough();

console.log({ 'readableFlowing': pass.readableFlowing });

pass.on('data', () => {});
console.log({ 'readableFlowing': pass.readableFlowing });
