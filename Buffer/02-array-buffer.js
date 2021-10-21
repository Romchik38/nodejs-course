'use strict';

const uint16 = new Uint16Array(2);

uint16[0] = 5000;
uint16[1] = 256;

console.log({ uint16 });
console.log({ 'uint16.buffer': uint16.buffer });

const buf = Buffer.from(uint16.buffer);
console.log({ buf });

buf[3] = 0xff;

console.log({ buf });
console.log({ 'uint16.buffer': uint16.buffer });
