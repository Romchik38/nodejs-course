'use strict';

const { createWriteStream } = require('fs');

const fileStream = createWriteStream('./1.txt', { encoding: 'utf8' });

const { write, close } = fileStream;

fileStream.on('close', () => {
  console.log('fileStream is closed');
});

fileStream.on('ready', () => {
  console.log('writableLength: ', fileStream.writableLength);
});
fileStream.write('hello', () => {
  console.log('from write writableLength:', fileStream.writableLength);
})
fileStream.end('end');
