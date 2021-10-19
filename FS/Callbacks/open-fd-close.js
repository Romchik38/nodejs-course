'use strict';

const { open, close } = require('fs');

open('./1.txt', (err, fd) => {
  if (err) throw err;
  console.log('file opened');
  console.log({ fd });
  close(fd, err => {
    if (err) throw err;
    console.log('file closed');
  });
});
