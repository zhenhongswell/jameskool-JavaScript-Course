const str = "abb";
const character = "b";
let count = 0;
for (let index = 0; index < str.length; index++) {
  const element = str[index];
  console.log(element);
  if (element === character) {
    count++;
  }
}

console.log(`${count}`);
