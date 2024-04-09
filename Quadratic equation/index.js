//abc為一元二次方程式的係數，可任意修改
const a = 123;
const b = 876;
const c = 5;
const x1 = (-b + (b ** 2 - 4 * a * c) ** 0.5) / (2 * a);
const x2 = (-b - (b ** 2 - 4 * a * c) ** 0.5) / (2 * a);
Math.sqrt();
console.log("此方程式的根為：");
console.log(x1, x2);
