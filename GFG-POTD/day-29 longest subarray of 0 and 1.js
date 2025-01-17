/**
 Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.

Examples:

Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
Output: 6
Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.
Input: arr[] = [0, 0, 1, 1, 0]
Output: 4
Explnation: arr[0...3] or arr[1...4] is the longest subarray with two 0s and two 1s.
Input: arr[] = [0]
Output: 0
Explnation: There is no subarray with an equal number of 0s and 1s.

 */

const longestSubarray = (arr) => {
    let mp = new Map();
    mp.set(0, -1);
    let sum = 0, ans = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] == 1 ? 1 : -1;
        if (mp.has(sum)) {
            ans = Math.max(ans, i - mp.get(sum));
        }
        else {
            mp.set(sum, i);
        }
    }
    return ans;
}

console.log(longestSubarray([0, 0, 1, 1, 0]));
