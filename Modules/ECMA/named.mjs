const firstname = "zhen";
const lastname = "hong";

export function hello() {
  console.log("hello");
}
export { firstname, lastname };

function sayMyName() {
  console.log(firstname + lastname);
}
function sayMyFirstName() {
  console.log(firstname);
}
function sayMyLastName() {
  console.log(lastname);
}

export default {
  sayMyName,
  sayMyFirstName,
  sayMyLastName,
};
