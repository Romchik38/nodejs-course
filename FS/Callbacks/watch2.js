
'use strict';

const { watch } = require('fs');

const watcher = watch('./', { encoding: 'utf8' });

watcher.on('change', (eventType, filename) => {
  console.log({ eventType, filename });
  watcher.close();
});

console.log({ watcher });
