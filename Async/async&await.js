const fetch = require("node-fetch");

async function doSomethingAsync() {
  return fetch(
    "https://utbwqwwuyvuxwjlawsjb.supabase.co/functions/v1/delay?seconds=3"
  );
}

async function doSomethingAsync_2() {
  return fetch(
    "https://utbwqwwuyvuxwjlawsjb.supabase.co/functions/v1/delay?seconds=3"
  );
}

async function main() {
  const p1 = doSomethingAsync();
  const p2 = doSomethingAsync_2();
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

main();
