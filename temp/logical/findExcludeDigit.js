function getNum(num, digit) {
  let count = 0,
    d;
  while (num > 0) {
    d = num % 10;
    if (d !== digit) {
      count++;
    }
    num = parseInt(num / 10);
  }
  return count;
}

let res = getNum(12345, 3);

console.log(res);
