// find even and odd number

const array = [1, 5, 8, 6, 7, 4, 5, 58, 8, 5, 5, 4, 5, 4];

const even = [];
const odd = [];

for (let i = 0; i < array.length - 1; i++) {
  if (array[i] % 2 === 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}

console.log("even", even);
console.log("odd", odd);
