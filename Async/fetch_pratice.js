const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((reponse) => {
    return reponse.json();
  })
  .then((data) => {
    filterData = data.filter((item) => item.id === 1 || item.id === 2);
    // console.log(filterData);
    const mapData = filterData.map((item) => {
      console.log(item.name);
      return item.name;
    });
    console.log(mapData);
  })
  .catch((error) => console.error("Error fetching"));
