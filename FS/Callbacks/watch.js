'use strict';

const { watch } = require('fs');

const watcher = watch('./', { encoding: 'utf8' },
  //eventType: 'rename' or 'change'
  (eventType, filename) => {
    if (filename) console.log({ eventType, filename });
    else {
      console.log({ eventType });
    }
});

console.log({ watcher });
