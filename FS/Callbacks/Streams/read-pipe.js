'use strict';

const fs = require('fs');
const { createReadStream } = fs;
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'video/mp4');
  const videoFile = createReadStream('./files-buffer-streams.mp4');
  videoFile.pipe(res);
  videoFile.on('data', chunk => {
//    console.log(c.length);
  });
  videoFile.on('close', c => {
    console.log('read stream closed');
  });
  videoFile.on('end', () => {
    console.log('end of stream');
    res.end();
  });
  res.on('close', () => {
    console.log('res closed');
  })
  res.on('error', () => {
    console.log('res error');
  })
  //socket
  res.socket.on('close', () => {
    console.log('socket closed');
  })
  res.socket.on('error', (e) => {
    console.log(e);
  })
  // res.socket.on('timeout', () => {
  //   console.log('socket timeout');
  //   res.end()
  // })
  // res.socket.setTimeout(5000)
});

server.listen(8080, '127.0.0.1');
