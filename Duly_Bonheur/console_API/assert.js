// console.assert(value,[message],[args])

const fa = false;
const zero = 0;
const emptyString = "";
const nu = null;
const notDef = undefined;
const notNum = NaN;

// checks if value is truthy
// if falsy its stops the execution of the program

console.assert(fa, "Assert", "hi");
console.log("boom");

// Assertion failed: Assert hi
// boom
