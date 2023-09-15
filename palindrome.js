// palindrome

// function isPalindrome(str) {
//   str = str.toLowerCase();
//   return str === str.split("").reverse().join("")
//     ? `${str} is palindrome`
//     : `${str} is not palindrome`;
// }

// let res = isPalindrome("level");
// console.log(res);

// second way

function palindrome(str) {
  let len = str.length;
  let mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
let res = palindrome("malayalam") ? "Is palindrome" : "Not Palindrome";
console.log(res);
