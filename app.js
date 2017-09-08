// To use with count.js - Module example
// var counter = require('./count');

// console.log(counter(['Abijit', 'Amit', 'Prasha']));

// To use with stuff.js - Module patterns example
var stuff = require('./stuff');

console.log(stuff.counter(['Abijit', 'Amit', 'Prasha']));
console.log(stuff.adder(3, 4));
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi, 5));
