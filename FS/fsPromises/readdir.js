'use strict';

const { readdir } = require('fs/promises');

const dir = readdir('./', { withFileTypes: true })
  .then(dir => {
    console.log({ dir });
    for (const item of dir) {
      console.log({ name: item.name, isDir: item.isDirectory(),
        isFile: item.isFile()
      });
    }
  })
  .catch(e => {
    console.log(e);
  });
