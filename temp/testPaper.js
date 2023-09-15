// 12345 - > O (15)

function sum(num) {
  let d;
  let s = 0;
  while (num > 0) {
    d = num % 10;
    s += d;
    num = parseInt(num / 10);
  }
  return s;
}

let res = sum(12345);
console.log(res);
