const fs = require("fs");
const dirfile = "dir.txt";
const flagsfile = "flag.txt";

let stats = fs.statSync(dirfile);
// console.log(stats);

// Stats {
//     dev: 16777220,
//         mode: 33188,
//             nlink: 1,
//                 uid: 501,
//                     gid: 20,
//                         rdev: 0,
//                             blksize: 4096,
//                                 ino: 39272963,
//                                     size: 9,
//                                         blocks: 8,
//                                             atimeMs: 1588958972792.961,
//                                                 mtimeMs: 1588958972123.063,
//                                                     ctimeMs: 1588958972123.063,
//                                                         birthtimeMs: 1588958968141.5474,
//                                                             atime: 2020 - 05 - 08T17: 29: 32.793Z,
//                                                                 mtime: 2020 - 05 - 08T17: 29: 32.123Z,
//                                                                     ctime: 2020 - 05 - 08T17: 29: 32.123Z,
//                                                                         birthtime: 2020 - 05 - 08T17: 29: 28.142Z
// }

// console.log(stats.isDirectory);
fs.stat(flagsfile, (err, stats) => {
  if (err) {
    throw err;
  } else {
    console.log(stats, { colors: true });
  }
});
