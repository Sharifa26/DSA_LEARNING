/**
 Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

Examples:

Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
Output: 6
Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.

Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
Output: 4
Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.

Input: arr[] = [15, 13, 12, 14, 11, 10, 9]
Output: 7
Explanation: The longest consecutive subsequence is 9, 10, 11, 12, 13, 14, 15, which has a length of 7.
 */

const subsequence = (arr) => {
    if (arr.length === 0) return 0;
    let set = [... new Set(arr)].sort((a, b) => a - b);// Remove duplicates and sort
    let max = 1;
    let curr = 1;
    for (let i = 0; i < set.length; i++) {
        if (set[i] == set[i - 1] + 1) {
            curr++;// Reset current subsequence length
        }
        else {
            curr = 1;// Reset current subsequence length
        }
        max = Math.max(max, curr);// Update maximum subsequence length
    }
    return max;

}

let arr = [2, 6, 1, 9, 4, 5, 3];
console.log(subsequence(arr));
