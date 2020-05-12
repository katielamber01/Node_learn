const fs = require("fs");
const util = require("util");

// old
fs.readFile("file.txt", (err, data) => {
  console.log(data.toString());
});

// new
var read = util.promisify(fs.readFile);

read("file.txt").then((data) => {
  console.log(data.toString());
});
