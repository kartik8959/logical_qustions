Array.prototype.myReducer = function (cb, InitialValue) {
  let accmulator = InitialValue;
  for (let i = 0; i < this.length; i++) {
    accmulator = accmulator ? cb(accmulator, this[i], i, this) : this[i];
  }
  return accmulator;
};

let arr = [1, 2, 3, 4, 5];

const myReduceResult = arr.myReducer((acc, curr, _idx, _arr) => {
  console.log(curr, acc);
  acc += curr;
  return acc;
}, 0);

console.log(myReduceResult);
