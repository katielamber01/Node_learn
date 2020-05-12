const fs = require("fs");
const dirfile = "dir.txt";
const flagsfile = "flag.txt";

fs.open(flagsfile, "r+", (err, fileDescriptor) => {
  if (err) {
    console.log("ERROR:", err.code, err.message);
  } else {
    // read
    // write
    console.log("opened:", fileDescriptor);
    fs.close(fileDescriptor, (err) => {
      console.log("file closed");
    });
  }
});
// opened: 20
// file closed

// if to change the file name to non existing
//ERROR: ENOENT ENOENT: no such file or directory, open 'flag.txt'
