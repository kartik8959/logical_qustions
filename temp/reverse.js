let n = 12345;
let d;
let r = 0;

while (n > 0) {
  d = n % 10;
  r = r * 10 + d;
  n = parseInt(n / 10);
}
console.log(r);
