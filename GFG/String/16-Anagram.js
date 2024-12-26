/**
 Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

Note: You can assume both the strings s1 & s2 are non-empty.

Examples :

Input: s1 = "geeks", s2 = "kseeg"
Output: true
Explanation: Both the string have same characters with same frequency. So, they are anagrams.

Input: s1 = "allergy", s2 = "allergic"
Output: false
Explanation: Characters in both the strings are not same, so they are not anagrams.

Input: s1 = "g", s2 = "g"
Output: true
Explanation: Character in both the strings are same, so they are anagrams.
 */

let s1= "geeks", s2 = "kseeg"
const anagram=(s1,s2)=>{
    // Create a hashmap to store character frequencies
    const charCount = {};
    
    // Count frequency of each character in string s1
    for (let ch of s1) 
        charCount[ch] = (charCount[ch] || 0) + 1;
    

    // Count frequency of each character in string s2
    for (let ch of s2) 
        charCount[ch] = (charCount[ch] || 0) - 1;

    // Check if all frequencies are zero
    for (let key in charCount) {
        if (charCount[key] !== 0) {
            return false;
        }
    }
    
    // If all conditions satisfied, they are anagrams
    return true;
}


console.log(anagram(s1,s2));
