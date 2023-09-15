// square of number should give 1
// 31-> 9 +1-->10 >1+0->1
// Happy Number

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
