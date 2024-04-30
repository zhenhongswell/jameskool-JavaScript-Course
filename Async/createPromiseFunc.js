const { error } = require("console");
const fs = require("fs");
function readFile(file) {
  return new Promise((resolve, reject) => {
    // resolve("success!");
    // reject({ code: "101", message: "failed to read" });
    try {
      const data = fs.readFileSync(file, "utf-8");
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}
const filePath = "tes.txt";
readFile(filePath)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("reading fail");
    console.log(error);
  });

console.log("do something!");
