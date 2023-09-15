function isPalindrome(str) {
  let len = str.length;
  let mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - i - 1]) return false;
  }
  return true;
}

let res = isPalindrome("malayalam") ? "is palindrome" : "is not palindrome";
console.log(res);
