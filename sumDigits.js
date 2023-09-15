let num = 1234;
let sum = 0;
let rem;

while (num > 0) {
  rem = num % 10;
  num = parseInt(num / 10);
  sum = sum + rem;
}

console.log(sum);
