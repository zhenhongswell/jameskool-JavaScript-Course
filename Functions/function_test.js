function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter1 = outer();
const counter2 = outer();
const result1 = counter1();
// the same local variable
const result2 = counter1();
const result3 = counter2();

console.log(result2, result3);
