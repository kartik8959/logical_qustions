function printAfterEachInterval(nums) {
  let sum = 0;
  for (let i = 1; i < nums.length; i++) {
    setTimeout(function () {
      console.log(i, new Date().getMinutes() + ": " + new Date().getSeconds());
    }, (sum + i) * 1000);
    sum += i;
  }
}
printAfterEachInterval(new Array(10));

// 1000  1000 1
// 2000  3000 2
// 3000  6000 3
// 4000  1000 4
// 5000  15000 5

// function printValueAfterDelay(value, delay) {
//   setTimeout(function () {
//     console.log(
//       value,
//       new Date().getMinutes() + ": " + new Date().getSeconds(),
//       delay
//     );
//   }, delay);
// }

// let delay = 1000; // Initial delay
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   delay = 1000 * (i + sum); // Increment the delay by i seconds (1000 milliseconds) for each iteration
//   printValueAfterDelay(i, delay);
//   sum += i;
// }
