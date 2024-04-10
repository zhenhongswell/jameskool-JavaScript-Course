// this is a statement
let x = 0;
// this is a expression
x = 1;
// this is a expression but also a statement
// x + 1 is a statement
// x = x + 1 is a expression
x = x + 1;

// this is a statement
// and the result of node would be 1 and undefined because of return value
console.log(1);

console.log((x = 1));
