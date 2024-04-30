// Pratice .then() . catch() . finally()
// const { error } = require("node:console");
const fs = require("fs");
const filePath = "test.txt";
// const data = fs.readFileSync(filePath, "utf-8");
// console.log(data);

fs.promises
  .readFile(filePath, "utf-8")
  .then(
    (data) => {
      console.log(data);
      //   testing error catching
      //   console.log(a);
    },
    (err) => {
      console.log("fail to read file ");
    }
  )
  .catch(console.log("any error"))
  .finally(console.log("complete read file..."));
