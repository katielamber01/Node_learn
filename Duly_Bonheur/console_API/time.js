console.time("100-elements");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("100-elements");
// prints 100-elements: 225.438ms
// label could be var time=100000
