import process from 'process';

let stop = false;

const interval = setInterval(() => {
  if (stop === false) console.log('hello');
}, 1000);

process.on('SIGUSR2', signal => {
  console.log(signal);
  stop = false;
});
//
process.on('SIGUSR1', signal => {
  console.log(signal);
  stop = true;
});

process.on('SIGINT', signal => {
  clearInterval(interval);
  console.log('exit with code 0');
});
