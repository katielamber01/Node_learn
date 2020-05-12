var cp = require("child_process");
var progs = {
  list: "ls",
  copy: "cp",
  folder: "mkdir",
};

var child1 = cp.spawn(progs.list);

child1.stdout.on("data", (data) => {
  console.log(`data1:${data}`);
});
// ls prints out the list of files in the current directory
// ls -a    : hidden files also, where a is a flag
//data:spawn.js

var child2 = cp.spawn(progs.list, ["-a"]);
child2.stdout.on("data", (data) => {
  console.log(`data2:${data}`);
});

var child3 = cp.spawn(progs.list, ["-a"], { cwd: ".." });
child3.stdout.on("data", (data) => {
  console.log(`data3:${data}`);
});
// cwd: ".." in the previous directory
// child_process.md
// same as ls -a ..  in command line

var child4 = cp.spawn(progs.list, ["-l"], { cwd: ".." });
child4.stdout.on("data", (data) => {
  console.log(`data4:${data}`);
});
// -l gives permission for the user
// data4: total 8
// drwxr - xr - x  3 beon  staff   96 May  6 18: 47 2
// - rw - r--r--  1 beon  staff  861 May  6 18: 38 child_process.md

var copy = cp.spawn(progs.copy, ["spawn.js", "copyspawn.js"]);
copy.on("exit", () => {
  console.log("finished");
});

// imitate error

var child5 = cp.spawn(progs.list, ["-l"], { cwd: "pub" }); // no such directory pub

child5.stdout.on("data", (data) => {
  console.log(`data5:${data}`);
});
child5.stderr.on("data", (err) => {
  console.log("stderr5:", err);
});
child5.on("error", (err) => {
  console.log("error occured 5"); //error occured 5
});

// create folder
cp.spawn(progs.folder, ["css"]); // just run to create a folder named css
