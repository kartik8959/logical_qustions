function getReverseStr(str) {
  let revStr = [...str].reduce((x, y) => {
    return y.concat(x);
  });
  return revStr;
}

let str = getReverseStr("Mukesh");
console.log(str);
