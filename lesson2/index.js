process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require("cluster");
const cpus = require("os").cpus();

if (cluster.isMaster) {
  // console.log("this is is master process", process.pid);
  // cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log("this is the worker process", process.pid);
  const express = require("express");
  const app = express();
  const crypto = require("crypto");

  //   function doWork(duration) {
  //     const start = Date.now();
  //     while (Date.now() - start < duration) {}
  //   }
  app.get("/", (req, res) => {
    // doWork(5000);
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi there");
    });
  });
  app.get("/fast", (req, res) => {
    res.send("fast");
  });
  app.listen(1100);
}
