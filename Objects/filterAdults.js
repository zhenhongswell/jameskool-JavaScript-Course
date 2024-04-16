function filterAdults(people) {
  // age >= 18
  const adultPeople = people.filter((n) => {
    return n.age >= 18;
  });
  return adultPeople;
}
const people = [
  { name: "john", age: 17 },
  { name: "jim", age: 20 },
  { name: "kevin", age: 23 },
  { name: "Jack", age: 12 },
];

console.log(filterAdults(people));
