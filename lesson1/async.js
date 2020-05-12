const https = require("https");

const options = {
  hostname: "encrypted.google.com",
  port: 443,
  path: "/",
  method: "GET",
};

const start = Date.now();

function doRequest() {
  const req = https.request(options, (res) => {
    // console.log("statusCode:", res.statusCode);
    // console.log("headers:", res.headers);

    // res.on("data", (d) => {
    //   process.stdout.write(d); // like console.log
    // });
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

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
