function missingNum(arr) {
  let n = arr.length + 1;
  let actualSum = (n * (n + 1)) / 2;
  let expectedSum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
  console.log(actualSum - expectedSum);
  5;
}

missingNum([1, 2, 3, 5]);
