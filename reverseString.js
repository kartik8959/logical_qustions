// First way
function getReverseStr(str) {
  let arr = [];
  let len = str.length - 1;
  if (!str || str.length < 2) return -1;
  for (let i = len; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join("");
}

let res = getReverseStr("jodhani");
console.log(res);

// Second way

function getReverseStr(str) {
  // second way 2.1
  //   return str.split("").reverse().join("");
  //   second way 2.2
  //   return [...str].reverse().join("");
  // second way 2.3
  return [...str].reduce((x, y) => {
    console.log(x, "X");
    console.log(y, "Y");
    return y.concat(x);
  });
}
1;

let res1 = getReverseStr("jodhani");
console.log(res1);
