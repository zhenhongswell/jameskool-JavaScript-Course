const globalVariable = "global";

if (true) {
  let localVariable = "local";
  console.log(`global Variable = ${globalVariable}`);
  console.log(`local Variable =${localVariable}`);
  localVariable = "changed";
  if (true) {
    const innerVariable = "inner";
    console.log(`global Variable = ${globalVariable}`);
    console.log(`local Variable =${localVariable}`);
  }
  // is not defined
  console.log(innerVariable);
}
// is not defined
console.log(localVariable);
