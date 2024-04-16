function bookToString(books) {
  const bookStringArray = books.map((n) => {
    return n.title + " by " + n.author;
  });
  let bookString = "";
  for (let index = 0; index < bookStringArray.length; index++) {
    bookString += bookStringArray[index];
    if (index === bookStringArray.length - 1) {
      break;
    }
    bookString += "\n";
  }
  return bookString;
}
const books = [
  { title: "the greate gatsby", author: "F .Scoot Fitzgerald" },
  { title: "1984", author: "George Orwell" },
];
console.log(bookToString(books));
