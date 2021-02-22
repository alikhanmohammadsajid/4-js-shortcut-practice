// Array destructuring
const numbers = [43, 56];
const [x, y] = [43, 56];
const x = numbers[0];
const y = numbers[1];
console.log(x, y);

function boxyfy(num) {
  return [num, num + 1];
}
const boxed = boxyfy(5);
console.log(boxed);
// jwdi ami 2 ta num er jwnnnw 2 ta variable di
const [box1, box2] = boxyfy(3);
console.log(box1, box2);

// // Object destructuring

const { name, id, roll } = { id: 2, name: "sk", roll: 33, address: "gohira" };
console.log(name, id, roll);

// new array  using three dots

const numbers = [1, 2, 3, 4, 5];
const newnumber = [43, ...numbers, 65];
console.log(newnumber);
