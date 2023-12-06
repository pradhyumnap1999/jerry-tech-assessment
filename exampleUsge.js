const RangeList = require('./RangeList');

// Create a new RangeList instance
const rl = new RangeList();

console.log(rl.toString()); // Should be ""
rl.add([1, 5]);
console.log(rl.toString()); // Should be: "[1, 5)"
rl.add([10, 20]);
console.log(rl.toString()); // Should be: "[1, 5) [10, 20)"
rl.add([20, 20]);
console.log(rl.toString()); // Should be: "[1, 5) [10, 20)"
rl.add([20, 21]);
console.log(rl.toString()); // Should be: "[1, 5) [10, 21)"
rl.add([2, 4]);
console.log(rl.toString()); // Should be: "[1, 5) [10, 21)"
rl.add([3, 8]);
console.log(rl.toString()); // Should be: "[1, 8) [10, 21)"
rl.remove([10, 10]);
console.log(rl.toString()); // Should be: "[1, 8) [10, 21)"
rl.remove([10, 11]);
console.log(rl.toString()); // Should be: "[1, 8) [11, 21)"
rl.remove([15, 17]);
console.log(rl.toString()); // Should be: "[1, 8) [11, 15) [17, 21)"
rl.remove([3, 19]);
console.log(rl.toString()); // Should be: "[1, 3) [19, 21)"