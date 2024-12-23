/**
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/kadanes-algorithm-1587115620
 Given an integer array arr[]. You need to find the maximum sum of a subarray.

Examples:

Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
Input: arr[] = [-2, -4]
Output: -2
Explanation: The subarray {-2} has the largest sum -2.
Input: arr[] = [5, 4, 1, 7, 8]
Output: 25
Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.
 */

const subarray = (arr) => {
    // code here
    let res = arr[0];
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {

        //finding the maxEnding
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);

        //finding the maximum value
        res = Math.max(res, maxEnding);
    }
    return res;
}

let arr = [5, 4, 1, 7, 8];
console.log(subarray(arr));
