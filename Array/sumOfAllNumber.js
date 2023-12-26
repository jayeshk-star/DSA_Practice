// sum of all number
const array = [1, 2, 3, 4, 56, 8, 9, 4, 5, 54];

// method 1
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

// method 2 reduce function
const newsum = array.reduce((add, pre) => {
  return add + pre;
}, 0);

console.log("sum", newsum);
