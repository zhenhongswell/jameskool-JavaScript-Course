function calculateAverage(scores) {
  let total = 0;
  scores.forEach((element) => {
    total += element;
  });
  const average = total / scores.length;
  return average;
}

const scores = [90, 95, 85, 100];
console.log(calculateAverage(scores));
