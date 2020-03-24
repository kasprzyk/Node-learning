const name = "Piotr";
const age = 27;

const user = {
  name,
  age,
  location: "Iława"
};
console.log(user);

// Obj destructuring
const product = {
  label: "laptop",
  price: 3,
  stock: 200,
  salePrice: undefined
};

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
