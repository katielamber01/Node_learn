var cp = require("child_process");

var progs = {
  list: "ls",
  remove: "rm",
};
var child1 = cp.exec(progs.remove + " -r css"); // remove css directory

var child2 = cp.exec(progs.remove + " -r css", (error, stdout, stderr) => {
  if (error) {
    console.log(
      `Name:${error.name} Message:${error.message} Stack:${error.stack}`
    );
  } else {
    console.log(stdout);
  }
}); // remove css directory
// css directory was not found:

// Name: Error Message: Command failed: rm - r css
// rm: css: No such file or directory
// Stack: Error: Command failed: rm - r css
// rm: css: No such file or directory

// at ChildProcess.exithandler(child_process.js: 303: 12)
// at ChildProcess.emit(events.js: 315: 20)
// at maybeClose(internal / child_process.js: 1026: 16)
// at Socket.<anonymous>(internal / child_process.js: 441: 11)
// at Socket.emit(events.js: 315: 20)
// at Pipe.<anonymous>(net.js: 674: 12)

// show file list in previous directory
var child3 = cp.exec(progs.list, { cwd: ".." }, (error, stdout, stderr) => {
  if (error) {
    console.log(
      `Name:${error.name} Message:${error.message} Stack:${error.stack}`
    );
  } else {
    console.log(stdout);
  }
});
// 2
// 3
// child_process.md
