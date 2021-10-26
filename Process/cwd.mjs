import { cwd } from 'process';
import { dirFn, dirStr } from './Signals/cwd2.mjs'

console.log(`cwd: ${cwd()}`);
console.log({ dirFn: dirFn(), dirStr });
