// true
console.log(3 == 3);
// true
console.log(3 === 3);
// true
console.log(3 == "3");
// false
console.log(3 === "3");

// always use === ,but use == in some specific case.
// ! => not
console.log(3 !== 3);

// || or
// && and

// true
console.log(true || false);
// false
console.log(false || false);
// false
console.log(false && true);
// true
console.log(1 < 3 && 2 > 1);

// ! priority is highest
// false
console.log(!(3 > 1));

// false
console.log(3 > 1 === false);
// true
console.log(!(3 > 1) === false);
