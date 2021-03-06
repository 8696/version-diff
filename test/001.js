const diff = require('./node.lib.dev');

console.log(diff(['1', '2'], '1.2'));             // true
console.log(diff(['1.0', '2.0'], '1.2.345'));     // true
console.log(diff(['1.0.0', '2.0.0'], '1.0.2'));  // true
console.log(diff(['1.0.0', '2.0.0'], '0.0.12')); // false
// 包括 1.0.0
console.log(diff(['1.0.0', '2.0.0'], '1.0.0'));  // true
// 不包括 2.0.0
console.log(diff(['1.0.0', '2.0.0'], '2.0.0'));  // false

console.log(diff(['*', '2.0.0'], '1.0.2')); // true
console.log(diff(['*', '2.0.0'], '2.0.0')); // false


console.log(diff(['1.0.0', '*'], '1.0.2')); // true
console.log(diff(['1.0.0', '*'], '0.2.0')); // false


console.log(diff(['*'], '1.0.2'));                   // true
console.log(diff(['*', '*'], '1.0.2'));               // true
console.log(diff(['1.0', '2.0'], '1.234'));           // true
console.log(diff(['1.0.0.0', '2.0.0.0'], '1'));       // true
console.log(diff(['1.0.0.0', '2.0.0.0'], '1.6.7.8')); // true
console.log(diff(['1.0.0.0', '2.0.0.0'], '2'));       // false

console.log(diff(['1.0.0.0.0', '1.0.0.3.0'], '1.000000.00.3'));  // false
console.log(diff(['1.0.0.0', '1'], '1')); // true


console.log(diff.main('1.0', '1.1'));             // <
console.log(diff.main('2.0', '1.1'));             // >
console.log(diff.main('2.0', '2.0'));             // =
console.log(diff.main('2', '2.0.0.0'));           // =
console.log(diff.main('2.0.0.1.0.1', '2.0.0.1')); // >
