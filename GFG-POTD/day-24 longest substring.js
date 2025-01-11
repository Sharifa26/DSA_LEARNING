/**
 Given a string s, find the length of the longest substring with all distinct characters. 

Examples:

Input: s = "geeksforgeeks"
Output: 7
Explanation: "eksforg" is the longest substring with all distinct characters.
Input: s = "aaa"
Output: 1
Explanation: "a" is the longest substring with all distinct characters.
Input: s = "abcdefabcbb"
Output: 6
Explanation: The longest substring with all distinct characters is "abcdef", which has a length of 6.
 */

function lengthOfLongestSubstring(s) {
    let start = 0; // Starting index of the current window
    let maxLength = 0; // Maximum length of substring with distinct characters
    let charSet = new Set(); // Set to store unique characters in the current window

    for (let end = 0; end < s.length; end++) {
        // Remove characters from the start until the current character is unique
        while (charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }

        // Add the current character to the set
        charSet.add(s[end]);

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Examples
console.log(lengthOfLongestSubstring("geeksforgeeks")); // Output: 7
console.log(lengthOfLongestSubstring("aaa"));           // Output: 1
console.log(lengthOfLongestSubstring("abcdefabcbb"));   // Output: 6
