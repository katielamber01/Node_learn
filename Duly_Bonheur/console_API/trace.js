// console.trace(message); prints the stacktrace to stderr

// throw new Error("this is my error");
// Error: this is my error
// at Object.<anonymous>(/Users/beon / Desktop / CHECKER / NODE_GRIDER / Duly_Bonheur / console_API / trace.js: 3: 7)
// at Module._compile(internal / modules / cjs / loader.js: 1147: 30)
// at Object.Module._extensions..js(internal / modules / cjs / loader.js: 1167: 10)
// at Module.load(internal / modules / cjs / loader.js: 996: 32)
// at Function.Module._load(internal / modules / cjs / loader.js: 896: 14)
// at Function.executeUserEntryPoint[as runMain](internal / modules / run_main.js: 71: 12)
// at internal / main / run_main_module.js: 17: 47

console.trace("my stack trace");
console.log("after trace");
