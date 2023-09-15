function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= longestWord.length) longestWord = word;
  }
  return longestWord;
}

const input = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(input);
console.log(longestWord); // Output: "jumps"
