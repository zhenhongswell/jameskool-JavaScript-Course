function factorial(n) {
  let answer = 0;
  if (n <= 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorial_use_while(n) {
  let answer = n;
  while (n > 1) {
    n--;
    answer = answer * n;
  }
  return answer;
}
console.log(factorial(5));
console.log(factorial_use_while(5));
// console.log(factorial_use_while(10));
