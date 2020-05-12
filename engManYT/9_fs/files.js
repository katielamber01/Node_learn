const fs = require("fs");

let read_options = {
  encoding: "utf-8",
  flag: "r", //open a file for reading
};

// read async to OS
fs.readFile("file.txt", read_options, (err, data) => {
  console.log(data.toString());
});
// sync
fs.readFileSync("file.txt", read_options);

let write_options = {
  encoding: "utf-8",
  flag: "w", // open a file for writing
  mode: 0o666, // the permission mode should be for a file
};

// write
// hello is the content you want to write
fs.writeFile("file.txt", "hello", write_options, (err) => {
  if (err) {
    // do something with error
  }
});

// delete
fs.unlink("file.txt", (err) => {
  if (err) {
    // do something with error
  }
});
