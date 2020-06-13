const diff = require('../src/index');


console.log(diff(['*', '0.0.1'], '0.0.0'));
console.log(diff(['0.0.1', '1.0.0'], '0.0.1'));
console.log(diff(['1.0.0', '2.0.0'], '1.0.1234'));
console.log(diff(['1.0.0', '2.0.0'], '1.23.1234'));
console.log(diff(['1.0.0', '*'], '12.23.1234'));
console.log(diff(['1.0.0', '1.0.0'], '1.0.0'));
console.log(diff(['*', '*'], '1.0.0'));
console.log(diff(['*'], '1.0.0'));

console.log(diff(['1.0.0','2.0.0'], '1.324'));
console.log(diff(['1.0.0', '2.0.0'], '0.0.1234'));
// console.log(diff(['1.0.0', '2.0.0'], '0.0.12'))
// console.log(diff(['*', '2.0.0'], '2.0.2'));
console.log(diff(['1.0.0', '2.0.0'], '1.0.0'));
console.log(diff(['*', '2.0.1'], '2.0.0'));
console.log(diff(['*', '2.0.0'], '2.0.0')); // false
console.log(diff(['1.0.0', '*'], '1.0.2')); // true
console.log(diff(['1.0.0', '*'], '0.2.0'));
console.log(diff(['*'], '1.0.2'));

console.log(diff(['1','2'], '1.2'));
console.log(diff(['1.0','2.0'], '1.2')); // true
console.log(diff(['*','*'], '1.0.2'));   // true

console.log(diff(['1.0','2.0'], '1.234'));
console.log(diff(['*','2.0'], '1.6666666.0'));
console.log(diff(['*','2.0.0.0.0'], '1.2134.2.3.4.5.5'));
console.log(diff(['1.0','*'], '1.0.2'));
console.log(diff(['1.0.0.0','2.0.0.0'], '1'));
console.log(diff(['1.0.0.0','2.0.0.0'], '1.6.7.8'));
console.log(diff(['1.0.0.0','2.0.0.0'], '2'));
console.log(diff(['*'], '1.0.2'));                   // true
console.log(diff(['*','*'], '1.0.2'));               // true
console.log(diff(['1.0','2.0'], '1.234'));           // true
console.log(diff(['1.0.0.0','2.0.0.0'], '1'));       // true
console.log(diff(['1.0.0.0','2.0.0.0'], '1.6.7.8')); // true
console.log(diff(['1.0.0.0','2.0.0.0'], '2'));       // false
