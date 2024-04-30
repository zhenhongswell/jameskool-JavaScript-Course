function work() {
  console.log("James工作中");
}

function orderCoffee() {
  console.log("James點了咖啡");
}

function getCoffee() {
  console.log("James拿到了咖啡");
}

function makeCoffee() {
  // change to async function
  return new Promise((resolve, reject) => {
    try {
      const start = Date.now();
      const duration = 3000; // 3秒

      while (Date.now() - start < duration) {
        // 此迴圈會跑三秒
      }
      console.log("James的咖啡完成了");
      resolve(getCoffee);
    } catch (error) {
      reject(error);
    }
  });
}

orderCoffee();
makeCoffee()
  .then((res) => {
    res();
  })
  .catch((err) => {
    console.log(err);
    console.log("what happen to my coffeeeeee");
  });
work();

// log:
// would get explanation at event loop unit
// James點了咖啡
// James的咖啡完成了
// James工作中
// James拿到了咖啡
