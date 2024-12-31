/**
 You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.

Note: The characters in the strings are in lowercase.

Examples :

Input: s1 = "abcd", s2 = "cdab"
Output: true
Explanation: After 2 right rotations, s1 will become equal to s2.

Input: s1 = "aab", s2 = "aba"
Output: true
Explanation: After 1 left rotation, s1 will become equal to s2.

Input: s1 = "abcd", s2 = "acbd"
Output: false
Explanation: Strings are not rotations of each other.
 */

function areRotations(s1, s2) {
    s1 += s1;

    // find s2 in concatenated string
    return s1.includes(s2);
}

let s1 = "abcd", s2 = "acbd";
console.log(areRotations(s1,s2));
