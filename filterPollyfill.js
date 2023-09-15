Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

let arr = [10, 20, 50, 48, 45, 69, 58, 47, 25, 63, 47];
let res = arr.myFilter((item) => {
  return item % 2 == 0;
});

console.log(res);
