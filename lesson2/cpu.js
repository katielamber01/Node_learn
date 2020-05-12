const cluster = require("cluster");
const cpus = require("os").cpus();

if (cluster.isMaster) {
  console.log("this is is master process", process.pid);
  cluster.fork();
  cluster.fork();

  cluster.fork();
} else {
  console.log("this is the worker process", process.pid);
}

// console.log(cpus);
