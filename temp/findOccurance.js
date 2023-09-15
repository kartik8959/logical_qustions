let elements = [1, 1, 2, 3, 4, 1];
let count = {};

for (let element of elements) {
  if (count[element]) {
    count[element]++;
  } else {
    count[element] = 1;
  }
}

console.log(count);
