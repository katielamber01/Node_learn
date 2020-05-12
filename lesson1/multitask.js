const crypto = require("crypto");
const https = require("https");
const fs = require("fs");
process.env.UV_THREADPOOL_SIZE = 5;

const start = Date.now();
const options = {
  hostname: "encrypted.google.com",
  port: 443,
  path: "/",
  method: "GET",
};

function doRequest() {
  const req = https.request(options, (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(Date.now() - start);
    });
    req.on("error", (e) => {
      console.error(e);
    });
  });
  req.end();
}

function doHash(str) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", str, Date.now() - start);
  });
}
doRequest();

fs.readFile("multitask.js", "utf8", () => {
  console.log("FS:", Date.now() - start);
}); // without doHash it takes a few ms

doHash("a");
doHash("b");
doHash("c");
doHash("d");

// 340
// Hash: d 1398
// Hash: a 1416
// FS: 1421
// Hash: b 1430
// Hash: c 1436

// 332
// Hash: b 1355
// FS: 1373
// Hash: a 1391
// Hash: d 1427
// Hash: c 1443

// process.env.UV_THREADPOOL_SIZE = 5;
// FS: 56
// 268
// Hash: c 1401
// Hash: a 1409
// Hash: d 1420
// Hash: b 1429

// process.env.UV_THREADPOOL_SIZE = 1;
// 253
// Hash: 725
// Hash: 1411
// Hash: 2098
// Hash: 2798
// FS: 2799
