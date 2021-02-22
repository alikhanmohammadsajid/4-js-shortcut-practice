const number = [12, 34, 21, 43, 23];
const name = ["rafiq", "safiq", "jabbar", " borkoth", "rabbi"];
const products = [
  { id: 33, name: "laptop", price: 500 },
  { id: 22, name: "mobile", price: 300 },
  { id: 11, name: "watch", price: 200 },
  { id: 1, name: "car", price: 1100 },
];
// // map
const names = products.map((products) => products.name);
console.log(names);

// // forEach

products.forEach((product) => {
  console.log(product.name);
});

// filter

const lowest = products.filter((product) => product.price < 500);
console.log(lowest);

const isthere = products.find((pd) => pd.id === 11);
console.log(isthere);
