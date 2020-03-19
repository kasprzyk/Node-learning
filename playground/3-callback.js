const names = ["name1", "name222", "name3333"];

const shortNames = names.filter(name => {
  return name.length <= 5;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 0,
      lng: 0
    };
    callback(data);
  }, 100);
};

geocode("Poland", data => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 200);
};
add(1, 4, sum => {
  console.log(sum);
});
