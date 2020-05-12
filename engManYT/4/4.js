const fs = require("fs");

fs.readFile("file.txt", (err, data) => {
  console.log(data.toString());
});
for (let i = 1; i <= 5; ++i) {
  fs.readFile("stuff/" + i + ".txt", (err, data) => {
    console.log(data.toString().trim());
  });
}
