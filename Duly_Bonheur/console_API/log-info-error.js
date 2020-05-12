// console.log(string, [data]); //to stdout
// console.info(string, [data]); // alias for console.log
// console.error(string, [data]); // prints to stderr

var data = 100;

var regMeg = "my output message";
var errMsg = "my err msg";

console.log(regMeg); // this message will be read and ptinted out to file.txt
console.log(errMsg);

var valueMsg = "this will be called %d times";
var valuesMsg = "this will be %s %d times";

console.log(valueMsg, data);
console.error(valuesMsg, "callllllled", data);

// this will be called 100 times
// this will be callllllled 100 times
