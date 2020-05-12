const fs = require("fs");
const util = require("util");

// old
// fs.readFile("data1.txt", (err, data1) => {
//   fs.readFile("data2.txt", (err, data2) => {
//     fs.readFile("data3.txt", (err, data3) => {
//       console.log(data2.toString());
//       console.log(data3.toString());
//       console.log(data1.toString());
//     });
//   });
// });

// new
// var read = util.promisify(fs.readFile);

// Promise.all([read("data1.txt"), read("data2.txt"), read("data3.txt")]).then(
//   (data) => {
//     const [data1, data2, data3] = data;

//     console.log(data1.toString());
//     console.log(data2.toString());
//     console.log(data3.toString());
//   }
// );

const fn = util.promisify(fs.readFile);
Promise.all([fn("data1.txt"), fn("data2.txt"), fn("data3.txt")]).then(
  (data) => {
    // console.log(typeof data);
    // typeof data is array object
    // <Buffer 73 6f 6d 65 20 74 65 78 74 20 66 72 6f 6d 20 74 78 74 20 64 61 74 61 31 >,
    // <Buffer 73 6f 6d 65 20 74 65 78 74 20 66 72 6f 6d 20 74 78 74 20 64 61 74 61 32 >,
    // <Buffer 73 6f 6d 65 20 74 65 78 74 20 66 72 6f 6d 20 74 78 74 20 64 61 74 61 33 >
    const [data1, data2, data3] = data;
    console.log(data1.toString());
    console.log(data2.toString());
    console.log(data3.toString());
  }
);
