function hello() {
  console.log("hello");
}
function sum(value1, value2) {
  return value1 + value2;
}

// module.exports = {
//   hello: hello,
//   sum: sum,
// };

// if the key equals value

module.exports = {
  hello,
  sum,
};
