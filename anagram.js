//Anagram  no of character and length should same
function isAnagram(str1, str2) {
  if (str1.length !== str2.length || !str1) {
    return false;
  }
  let string1 = str1.toLowerCase().split("").sort().join("");
  let string2 = str2.toLowerCase().split("").sort().join("");
  return string1 === string2;
}

let res = isAnagram("abc", "cba");
console.log(res);
