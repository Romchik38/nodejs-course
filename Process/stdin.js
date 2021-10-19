'use strict';

const { createWriteStream } = require('fs');
const stdin = process.stdin;

const fileStream = createWriteStream('./1.txt', { encoding: 'utf8' });

stdin.on('data', data => {
  console.log({ data: data.toString() });
  fileStream.write(data);
});

fileStream.on('open', () => {
  console.log('file stream is opened');
});

fileStream.on('ready', () => {
  console.log('file stream is ready');
});

fileStream.on('close', () => {
  console.log('file stream is closed');
  process.exit(0);
});

process.on('SIGINT', () => {
  fileStream.close();
});
