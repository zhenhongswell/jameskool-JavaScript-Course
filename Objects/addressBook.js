const addressBook = {
  print: () => {
    for (const [k, v] of Object.entries(this)) {
      if (typeof v === "string") {
        console.log(`${k}:${v}`);
      }
    }
  },
  addEntry: (name, locate) => {
    this[name] = locate;
  },
};

addressBook.addEntry("james", "Taipei");
addressBook.addEntry("zhenhong", "Pingtung");

addressBook.print();
