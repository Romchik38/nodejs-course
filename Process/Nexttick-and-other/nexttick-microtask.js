'use strict';

const { nextTick } = require('process');

queueMicrotask(() => {
  console.log('from 1st queueMicrotask');
})

Promise.resolve(4).then(data => {
  console.log({ data });
});

nextTick(() => {
  console.log('from nextTick');
});

queueMicrotask(() => {
  console.log('from 2nd queueMicrotask');
})
