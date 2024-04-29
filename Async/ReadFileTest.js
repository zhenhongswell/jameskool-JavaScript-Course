const fs = require("fs");
fs.promises
  .readFile("test.txt", "utf-8")
  .then((res) => {
    console.log("read sucess!");
    console.log(res);
    return res;
  })
  .then((res2) => {
    const res2_sub2 = res2.substring(0, 2);
    console.log(res2_sub2);
  })
  .catch((err) => {
    console.log("read file fail!");
  })
  .finally((fin) => {
    console.log("read file over!");
  });
