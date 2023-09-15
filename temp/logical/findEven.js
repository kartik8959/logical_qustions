let num = 56892;
let d,
  count = 0;

while (num > 0) {
  d = num % 10;
  if (d % 2 == 0) {
    count++;
  }
  num = parseInt(num / 10);
}

console.log(count);
