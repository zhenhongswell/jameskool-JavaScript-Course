const inputString = "hello world";
let reversedString = "";
for (let index = inputString.length - 1; index >= 0; index--) {
  reversedString += inputString[index];
}
console.log(reversedString);
