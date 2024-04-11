let count = 1;
while (count <= 100) {
  if (count % 5 === 0) {
    count++;
    continue;
  }
  console.log(count);
  count++;
}
