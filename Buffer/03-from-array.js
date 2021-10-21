'use strict';

const { Buffer } = require('buffer');

//не сможет распознать символ s
const buf = Buffer.from(['s', 1]);
console.log({ buf });  // buf: <Buffer 00 01>

//сможет распознать
const buf2 = Buffer.from([0xee, 1]);
console.log({ buf2 });  //  buf2: <Buffer ee 01>
