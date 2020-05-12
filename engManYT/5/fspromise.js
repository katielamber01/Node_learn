const fs = require("fs");

// fs.readFile("file.txt", (err, data) => {
//     console.log(data.toString());
// });
new Promise((resolve, reject) => {
  fs.readFile("file.txt", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
})
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
