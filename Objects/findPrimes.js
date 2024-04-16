function findPrimes(n) {
  const array = [];
  for (let number = 2; number <= n; number++) {
    let isPrime = true;
    let counter = 0;
    for (let modTarget = 1; modTarget <= number; modTarget++) {
      if (number % modTarget === 0) {
        counter++;
      }
      if (counter > 2) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      array.push(number);
    }
  }
  return array;
}

console.log(findPrimes(10));
console.log(findPrimes(20));
