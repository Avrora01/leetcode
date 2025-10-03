// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, 
// which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. The same principle applies to the 
// number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.



// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

function romanToInt(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const current = values[s[i]]
    const next = values[s[i + 1]]

    if (next > current) {
      res -= current
    }
    else {
      res += current
    }
  }
  return res

}
// console.log(romanToInt("III"));


//2) Sort Characters By Frequency
//Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them.
// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.


function frequencySort(s) {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0
    }
    obj[s[i]]++
  }
  let arr = Object.entries(obj).sort((a, b) => b[1] - a[1])
  let str = ""
  for (let i = 0; i < arr.length; i++) {
    str += arr[i][0].repeat(arr[i][1])
  }
  return str

}

// console.log(frequencySort("tree"));
// console.log(frequencySort("Aabb"));

//3)
//Water Bottles II
// You are given two integers numBottles and numExchange.
// numBottles represents the number of full water bottles that you initially have. In one operation, you can perform one of the following operations:
// Drink any number of full water bottles turning them into empty bottles.
// Exchange numExchange empty bottles with one full water bottle. Then, increase numExchange by one.
// Note that you cannot exchange multiple batches of empty bottles for the same value of numExchange. For example, if numBottles == 3 and numExchange == 1, 
// you cannot exchange 3 empty water bottles for 3 full bottles.
// Return the maximum number of water bottles you can drink.

// Example 1:
// Input: numBottles = 13, numExchange = 6
// Output: 15
// Explanation: The table above shows the number of full water bottles, empty water bottles, the value of numExchange, and the number of bottles drunk.

// Constraints:
// 1 <= numBottles <= 100 
// 1 <= numExchange <= 100


function maxBottlesDrunk(numBottles, numExchange, empty = 0) {
  empty += numBottles
  if (empty < numExchange) {
    return numBottles
  }
  let newBottle = 1;
  empty -= numExchange;
  numExchange += 1;

  return numBottles + maxBottlesDrunk(newBottle, numExchange, empty);
}

// console.log(maxBottlesDrunk(13, 6))

//4) Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21
 
// Constraints:
// -231 <= x <= 231 - 1

function reverse(x) {
  let reversed = 0
  while (x !== 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit
    x = Math.trunc(x / 10)
  }
  return reversed
}
console.log(reverse(-123));
