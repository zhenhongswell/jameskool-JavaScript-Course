function calculateDistance(x1, y1, x2, y2) {
  return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}
// console.log((-2) ** 2);
console.log(calculateDistance(0, 0, 3, 4));
console.log(calculateDistance(-1, -1, 1, 1));
