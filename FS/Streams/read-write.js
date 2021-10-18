'use strict';

const fs = require('fs');
const { createReadStream } = fs;
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'video/mp4');
  const videoFile = createReadStream('./files-buffer-streams.mp4');
  videoFile.pipe(res);
  videoFile.on('end', () => {
    console.log('end of stream');
    res.end();
  });
});

server.listen(8081, '127.0.0.1');
