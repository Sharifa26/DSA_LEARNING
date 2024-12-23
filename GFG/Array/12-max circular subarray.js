/**
 Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.

Examples:

Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
Output: 22
Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
Output: 23
Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
 */

// JavaScript program to find maximum Subarray Sum in Circular
// array using prefix and suffix

function circularSubarraySum(arr) {
    let n = arr.length;
    let suffixSum = arr[n - 1];

    // maxSuffix array to store the value of 
    // maximum suffix occurred so far.
    let maxSuffix = new Array(n + 1).fill(0);
    maxSuffix[n - 1] = arr[n - 1];

    for(let i = n - 2; i >= 0; i--) {
        suffixSum += arr[i];
        maxSuffix[i] = Math.max(maxSuffix[i + 1], suffixSum);
    }

    // circularSum is Maximum sum of circular subarray
    let circularSum = arr[0];

    // normalSum is Maximum sum subarray considering 
    // the array is non-circular
    let normalSum = arr[0];

    let currSum = 0;
    let prefix = 0;

    for(let i = 0; i < n; i++) {
        
        // Kadane's algorithm
        currSum = Math.max(currSum + arr[i], arr[i]);
        normalSum = Math.max(normalSum, currSum);

        // Calculating maximum Circular Sum
        prefix += arr[i];
        circularSum = Math.max(circularSum, prefix + maxSuffix[i + 1]);
    }

    return Math.max(circularSum, normalSum);
}

const arr = [8, -8, 9, -9, 10, -11, 12];
console.log(circularSubarraySum(arr));