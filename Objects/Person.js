const zhenhong = {
  name: "zhenhong",
  age: 25,
  greet() {
    console.log(`hello I'm ${this.name}`);
  },
};

console.log(zhenhong.name);
console.log(zhenhong.age);
zhenhong.greet();
