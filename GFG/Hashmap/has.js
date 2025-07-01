/**
 * // Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


 function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
}


// 3. Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.


function groupAnagrams(strs) {
  const anagramMap = new Map();
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (anagramMap.has(sortedStr)) {
      anagramMap.get(sortedStr).push(str);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  }
  return Array.from(anagramMap.values());
}


//4. Find the First Non-Repeating Character in a String
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.


function firstUniqChar(s) {
  const charMap = new Map();
  for (let char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
 */