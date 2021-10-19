'use strict';

const fsPromises = require('fs/promises');

fsPromises.open('1.txt', 'a')
  .then(async fileHandle => {
    console.log('file opened');
    console.log({ fileHandle });
    const stat = await fileHandle.stat();
    const write = await fileHandle.write('write hello\n')
    console.log({ stat, write });
    await fileHandle.close()
    console.log('file closed');
  })
  .catch(e => {
    console.log(e);
  })
