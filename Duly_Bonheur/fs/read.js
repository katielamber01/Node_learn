const fs = require("fs");
const dirfile = "dir.txt";
const flagsfile = "flag.txt";

let filesize = fs.statSync(dirfile).size;
console.log(filesize); // 9

let buff = new Buffer(filesize);
fs.open(dirfile, "r+", (err, fd) => {
  if (err) {
    console.log(`code ${err.code} message:${err.message}`);
  } else {
    console.log(`file(${fd}) successfully opened`);

    let bytes = fs.readSync(fd, buff, 0, filesize, 0);
    console.log(`bytes:${bytes}`);

    console.log(`content:${buff.toString()}`);

    fs.close(fd, (err) => {
      console.log("file closed");
    });
  }
});
// file(20) successfully opened
// file closed
