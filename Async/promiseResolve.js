function sum(a, b) {
  try {
    Promise.resolve(a + b);
  } catch (e) {
    console.log(e);
    Promise.reject("some thing goes wrong");
  }
  return Promise.resolve(a + b);
  //
  //   return new Promise((resolve, reject) => {
  //     resolve(a + b);
  //   });
}

sum(100, 23)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
