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

// 3)
function repeatedCharacter(s) {
  let arr = s.split('');
  let firstDuplicateIndex = s.length;
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (j < firstDuplicateIndex) {
          firstDuplicateIndex = j;
          result = arr[i];
        }
        break;
      }
    }
  }
  return result;
}
// console.log(repeatedCharacter("abccbaacz"));

// 4)
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}
// console.log(twoSum([2, 7, 11, 15], 9));



//5)

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


function plusOne(digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    }
    else {
      digits[i] += 1
      return digits
    }
  }

  return [1, ...digits]
}
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));

//6) 
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.


function addDigits(num) {
  while (num >= 10) {
    let sum = 0;
    let str = String(num)
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i])
    }
    num = sum
  }
  return num
}

// console.log(addDigits(38));


//7) Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// Example 1:
// Input: s = "Hello"
// Output: "hello"


function toLowerCase(s) {
  arr = s.toLowerCase()
  return arr;
}

// console.log(toLowerCase("Hello"));

//8) Check if the Sentence Is Pangram
// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.

function checkIfPangram(sentence) {
  let set = new Set(sentence)
  if (set.size == 26) {
    return true
  }
  else {
    return false
  }
}

// console.log(checkIfPangram("leetcode"));



