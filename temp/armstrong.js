function isArmstrongNumber(num) {
  let sum = 0;

  for (let temp = num; temp > 0; temp = parseInt(temp / 10)) {
    let rem = temp % 10;
    sum += rem * rem * rem;
  }
  return sum === num;
}

console.log(isArmstrongNumber(153));
