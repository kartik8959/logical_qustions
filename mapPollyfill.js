Array.prototype.myMap = function (cb) {
  let arr = [];
  console.log(this, "this");
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

let arr = [10, 20, 30, 40, 50];
let res = arr.myMap((item, i) => item + 3);

console.log(res);
