function getMemory(totalMemory, lossMemory) {
  return totalMemory - totalMemory * 0.7;
}

let res = getMemory(2147483648, 7);
console.log(res.toFixed(2), "res");
