'use strict';

//15.9
const watch = require('fs/promises');

(async () => {
  try {
    const w1 = watch('./');
    for await (const event of w1) {
      console.log({ event });
    }
  } catch (e) {
    console.log(e);
  }
})();
