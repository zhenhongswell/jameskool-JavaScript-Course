const fetch = require("node-fetch");

async function doSomethingAsync() {
  return fetch(
    "https://utbwqwwuyvuxwjlawsjb.supabase.co/functions/v1/delay?seconds=10"
  );
}

async function doSomethingAsync_2() {
  return fetch(
    "https://utbwqwwuyvuxwjlawsjb.supabase.co/functions/v1/delay?seconds=10"
  );
}

async function main() {
  const p1 = doSomethingAsync();
  console.log(1);
  const p2 = doSomethingAsync_2();
  console.log(2);
  console.log(p1);
  console.log(p2);
  p1.then((res) => {
    return res.json();
  }).then((data) => {
    console.log(1);
    console.log(data);
  });
  p2.then((res) => {
    return res.json();
  }).then((data) => {
    console.log(2);
    console.log(data);
  });
}

async function main_Await() {
  const p1 = doSomethingAsync()
    .then((res) => res.json())
    .then((data) => data);
  const p2 = doSomethingAsync_2()
    .then((res) => res.json())
    .then((data) => data);
  console.log(p1, p2);
  const result1 = await p1;
  console.log(1);
  const result2 = await p2;
  console.log(2);
  console.log(result1, result2);
}
// main_Await();
main();
