'use strict';

const { Readable } = require('stream');

const readStream = new Readable();

const highWaterMark = readStream.readableHighWaterMark;


console.log({ readStream });
console.log({ highWaterMark });
