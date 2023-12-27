//Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1).

let array = [12, 5, 8, 5, 6, 666, 5, 5, 55];

print3largest(array, array.length);

function print3largest(arr, arr_size) {
  let first, second, third;

  if (arr_size < 3) {
    document.write(" Invalid Input ");
    return;
  }

  third = first = second = Number.MIN_VALUE;
  for (let i = 0; i < arr_size; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) third = arr[i];
  }

  console.log(
    "Three largest elements are " + first + " " + second + " " + third + "<br>"
  );
}
