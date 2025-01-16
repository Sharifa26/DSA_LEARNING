/**
 Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

Examples:

Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
Output: 6
Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.
Input: arr[] = [-5, 8, -14, 2, 4, 12], k = -5
Output: 5
Explanation: Only subarray with sum = 15 is [-5, 8, -14, 2, 4] of length 5.
Input: arr[] = [10, -10, 20, 30], k = 5
Output: 0
Explanation: No subarray with sum = 5 is present in arr[].
 */

// const subarray = (arr, k) => {
//     let n = arr.length;
//     let prefix = new Array(n + 1).fill(0);
//     let sum = 0;
//     let maxLen = 0;
//     for (let i = 0; i < n; i++) {
//         sum += arr[i];
//         prefix[i + 1] = sum;
//     }
//     for (let i = 0; i <= n; i++) {
//         for (let j = i; j <= n; j++) {
//             if (prefix[j] - prefix[i] === k) {
//                 maxLen = Math.max(maxLen, j - i );
//             }
//         }
//     }
//     return maxLen;
// }

// let arr = [-5, 8, -14, 2, 4, 12], k = -5
// console.log(subarray(arr,k));

const subarray = (arr, k) => {
    let currentSum = 0;
    let maxLen = 0;
    const map = new Map();

    // Initialize the map with (0, -1) to handle cases where subarray starts from index 0
    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        // Check if currentSum - k exists in the map
        if (map.has(currentSum - k)) {
            maxLen = Math.max(maxLen, i - map.get(currentSum - k));
        }

        // Store the first occurrence of currentSum
        if (!map.has(currentSum)) {
            map.set(currentSum, i);
        }
    }

    return maxLen;
};

// Test cases
console.log(subarray([10, 5, 2, 7, 1, -10], 15)); // Output: 6
console.log(subarray([-5, 8, -14, 2, 4, 12], -5)); // Output: 5
console.log(subarray([10, -10, 20, 30], 5)); // Output: 0

