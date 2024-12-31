/**
 Given a string s, the task is to find the minimum characters to be added at the front to make the string palindrome.

Note: A palindrome string is a sequence of characters that reads the same forward and backward.

Examples:

Input: s = "abc"
Output: 2
Explanation: Add 'b' and 'c' at front of above string to make it palindrome : "cbabc"

Input: s = "aacecaaaa"
Output: 2
Explanation: Add 2 a's at front of above string to make it palindrome : "aaaacecaaaa"
 */

const add=(s)=>{
    // Reverse the string
    const reversed = s.split('').reverse().join('');
    // Create the combined string with a separator
    const combined = s + '#' + reversed;

    // Compute the LPS array
    const computeLPS = (str) => {
        const n = str.length;
        const lps = Array(n).fill(0);
        let length = 0; // length of the previous longest prefix suffix
        let i = 1;

        while (i < n) {
            if (str[i] === str[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length !== 0) {
                    length = lps[length - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        return lps;
    };

    const lps = computeLPS(combined);

    // Minimum characters to add = string length - longest palindrome suffix
    return s.length - lps[combined.length - 1];
}
let s = "abc";
console.log(add(s));
