const year = 2100;

if (year % 400 === 0) {
  console.log(`the year:${year} is Leap year`);
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log(`the year:${year} is Leap year`);
} else {
  console.log(`the year:${year} is Normal year`);
}
