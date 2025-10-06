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

//9) Earliest Time to Finish One Task

// You are given a 2D integer array tasks where tasks[i] = [si, ti].
// Each [si, ti] in tasks represents a task with start time si that takes ti units of time to finish.
// Return the earliest time at which at least one task is finished.

// Example 1:
// Input: tasks = [[1,6],[2,3]]
// Output: 5
// Explanation:
// The first task starts at time t = 1 and finishes at time 1 + 6 = 7. The second task finishes at time 2 + 3 = 5. You can finish one task at time 5.

function earliestTime(tasks) {
  let minEl = Infinity
  for (let i = 0; i < tasks.length; i++) {
    let sum = tasks[i][0] + tasks[i][1]
    if (sum < minEl) {
      minEl = sum
    }
  }
  return minEl
}
// console.log(earliestTime([[1, 6], [2, 3]]));

//10)Maximize Sum of At Most K Distinct Elements
// You are given a positive integer array nums and an integer k.
// Choose at most k elements from nums so that their sum is maximized.However, the chosen numbers must be distinct.
// Return an array containing the chosen numbers in strictly descending order.

//   Example 1:
// Input: nums = [84, 93, 100, 77, 90], k = 3
// Output: [100, 93, 90]
// Explanation:
// The maximum sum is 283, which is attained by choosing 93, 100 and 90. We rearrange them in strictly descending order as [100, 93, 90].

function maxKDistinct(nums, k) {
  let set = [...new Set(nums)]

  let sortArr = set.sort((a, b) => {
    return b - a
  })

  return sortArr.slice(0, k)
}
// console.log(maxKDistinct([84, 93, 100, 77, 90], 3));

//11)Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length
}
// console.log(containsDuplicate([1, 2, 3]));


//12) Water Bottles
// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.
// The operation of drinking a full water bottle turns it into an empty bottle.
// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

// Example 1:
// Input: numBottles = 9, numExchange = 3
// Output: 13
// Explanation: You can exchange 3 empty bottles to get 1 full water bottle.

function numWaterBottles(numBottles, numExchange, empty = 0) {

  empty += numBottles
  if (empty < numExchange) {
    return numBottles
  }

  let newBottle = 1;
  empty -= numExchange;

  return numBottles + numWaterBottles(newBottle, numExchange, empty)
}

// console.log(numWaterBottles(9,3));

//13)Sqrt(x)
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


function mySqrt(x) {
  let i = 0;
  while (true) {
    if (i * i > x) {
      i--;
      break
    }
    i++
  }
  return Math.floor(i)
}

// console.log(mySqrt(8));

//14) Ugly Number
// An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

// Example 2:
// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors.

// Example 3:
// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.


function isUgly(n) {
  if (n <= 0) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  while (n % 5 === 0) {
    n = n / 5;
  }
  return n === 1;
}

// console.log(isUgly(6));
// console.log(isUgly(14));
// console.log(isUgly(1));  



//15) twoSum
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// console.log(twoSum([2, 7, 11, 15], 9));


//Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements 
// in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size
// of nums.
// Return k.
// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.                          
// It is sorted with no values equaling val.
// int k = removeElement(nums, val); // Calls your implementation
// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++;
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = '_';
  }
  return k
}
// console.log(removeElement([3, 2, 2, 3], 3));
