// 1) Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function isPalindrome(x) {
  let str = x.toString();
  let res = "";
  for (let i = str.length - 1; i >= 0; --i) {
    res += str[i];
  }
  return res === str;
}
// console.log(isPalindrome(121));

// 2) Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

function lengthOfLastWord(s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
}
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
