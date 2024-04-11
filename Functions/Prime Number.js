const number = 11;
function PrimeNumberCheck(number) {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
for (let index = 2; index <= number; index++) {
  const isPrimeNumber = PrimeNumberCheck(index);
  if (isPrimeNumber) {
    console.log(`${index} is PrimeNumber`);
  } else {
    console.log(`${index} is not PrimeNumber`);
  }
}
