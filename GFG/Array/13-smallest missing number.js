/**
 Given an unsorted array arr[] with both positive and negative elements, the task is to find the smallest positive number missing from the array.

Note: You can modify the original array.

Examples:

Input: arr[] = {2, -3, 4, 1, 1, 7}
Output: 3
Explanation: 3 is the smallest positive number missing from the array.

Input: arr[] = {5, 3, 2, 5, 1}
Output: 4
Explanation: 4 is the smallest positive number missing from the array.

Input: arr[] = {-8, 0, -1, -4, -3}
Output: 1
Explanation: 1 is the smallest positive number missing from the array.
 */

// JavaScript program to find the first missing positive number 
// using cycle sort

function missingNumber(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {

        // if arr[i] is within the range 1 to n and arr[i] is
        // not placed at (arr[i]-1)th index in arr
        while (arr[i] >= 1 && arr[i] <= n 
               && arr[i] !== arr[arr[i] - 1]) {

            // then swap arr[i] and arr[arr[i]-1] to place 
            // arr[i] to its corresponding index
            let temp = arr[i];
            arr[i] = arr[arr[i] - 1];
            arr[temp - 1] = temp;
        }
    }

    // If any number is not at its corresponding index 
    // it is then missing,
    for (let i = 1; i <= n; i++) {
        if (i !== arr[i - 1]) {
            return i;
        }
    }

    // If all number from 1 to n are present 
    // then n+1 is smallest missing number
    return n + 1;
}

let arr = [2, -3, 4, 1, 1, 7];
console.log(missingNumber(arr));