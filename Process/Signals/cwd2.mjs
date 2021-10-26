import { cwd } from 'process';

const dirFn = () => cwd();
const dirStr = dirFn();

export { dirFn, dirStr };
