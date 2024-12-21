/**https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/rotate-array-by-n-elements-1587115621
 Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

Note: Consider the array as circular.

Examples :

Input: arr[] = [1, 2, 3, 4, 5], d = 2
Output: [3, 4, 5, 1, 2]
Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.

Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
 */

let arr = [1, 2, 3, 4, 5];
let d = 2;

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
const rotateArray = (arr, d) => {
    let n = arr.length;
    d = d % n;

    // Step 1: Reverse the first `d` elements
    reverse(arr, 0, d - 1);

    // Step 2: Reverse the remaining `n - d` elements
    reverse(arr, d, n - 1);

    // Step 3: Reverse the entire array
    reverse(arr, 0, n - 1);

    return arr;
}

console.log(rotateArray(arr, d));
