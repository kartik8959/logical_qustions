function groupObjectByProperty(arr, property) {
  let group = {};
  arr.forEach((obj) => {
    let value = obj[property];
    if (!group[value]) {
      group[value] = [];
    }
    group[value].push(obj);
  });
  return group;
}

let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 30 },
  { name: "lisa", age: 25 },
  { name: "lisa", age: 55 },
];

let group = groupObjectByProperty(people, "age");
console.log(group, "Group : ");

let arr = [10, 20, 30, 40];
arr.splice(2, 2);
console.log(arr);

// splice (startIndex, deleteIndex, Item1, Item2)

let d1 = new Date();
let d2 = new Date();
let res = d1 - d2;
