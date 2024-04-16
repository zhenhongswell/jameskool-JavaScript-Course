function findMax(numbers) {
  let maxNumber = numbers[0];
  numbers.forEach((element) => {
    if (element > maxNumber) {
      maxNumber = element;
    }
  });
  return maxNumber;
}

console.log(findMax([1, 3, 5, 7, 9]));
console.log(findMax([-2, 0, -10, -4]));
