# Classes

## class FileHandle:

  * fsPromises --> open()

  - extends EventEmitter

## class Dir

  * fsPromises  --> opendir()
  * Callback    --> opendir()
  * Synchronous --> opendirSync()

  **async iterator**

## Dirent

  * class Dir   --> iterate
  * Callback    --> readdir()
  * Synchronous --> readdirSync()

  **object**

## class FSWatcher

  * Callback --> watch()

  **EventEmitter**

## class StatWatcher

  * Callback --> watchFile()

  **EventEmitter**

## class ReadStream

  * Callback --> createReadStream()

  **[ReadStream](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#class-fsreadstream) extends [stream.Readable](https://nodejs.org/dist/latest-v17.x/docs/api/stream.html#class-streamreadable)**

## class Stats

  * Callback     --> stat()
                     lstat()
                     fstat()
  * Synchronous  --> stat()
                     lstat()
                     fstat()

## class WriteStream

  * Callback --> createWriteStream()

  **[WriteStream](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#class-fswritestream) extends [stream.Writable](https://nodejs.org/dist/latest-v17.x/docs/api/stream.html#class-streamwritable)**
