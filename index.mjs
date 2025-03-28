import fs from 'fs' ;
import { format } from 'date-fns' ;
import { Readable, Writable, Transform } from 'stream' ;

const readStream = new Readable({ objectMode: true, read() {} });

const intervalId = setInterval(() => {
  readStream.push(new Date());
}, 1000);

const formatStream = new Transform({
                                     objectMode: true,
                                     transform(chunk, _, callbackFn) {
                                       const formattedTime = format(chunk, 'yyyy-MM-dd HH:mm:ss');
                                       callbackFn(null, `${formattedTime}\n`);
                                     },
                                   });

const timeLogFileStream = fs.createWriteStream('time-log.txt', { flags: 'a' });
const writeStream = new Writable({
                                   write(chunk, _, callbackFn) {
                                     timeLogFileStream.write(chunk, _, callbackFn);
                                   },
                                 });

readStream
  .pipe(formatStream)
  .pipe(writeStream);

console.log('Running...');

process.on('SIGINT', () => {
  console.log('Stopping the app...');
  clearInterval(intervalId);
  readStream.push(null);
  timeLogFileStream.end();
  process.exit();
});
