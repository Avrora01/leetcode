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
console.log(isPalindrome(121));
