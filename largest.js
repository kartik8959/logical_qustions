let arr = [3, 6, 2, 56, 32, 5, 89, 32, 101];

let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }

let res = arr.sort((a, b) => {
  return a - b;
});

console.log(res, arr.sort());
