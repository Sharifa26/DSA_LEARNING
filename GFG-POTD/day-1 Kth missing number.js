//https://www.geeksforgeeks.org/problems/kth-missing-positive-number-in-a-sorted-array/1
/***
 Input: arr[] = [3, 5, 9, 10, 11, 12], k = 2
Output: 2
Explanation: Missing are 1, 2, 4, 6… and 2nd missing number is 2.

Input: arr[] = [1, 2, 3], k = 2
Output: 5
Explanation: Missing are 4, 5, 6… and 2nd missing number is 5.


Input: arr[] = [2, 3, 4, 7, 11], k = 5
Output: 9
Explanation: Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.
 */

function kthMissing(arr, k) {
    // code here
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length + k;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > mid + k) {
            high = mid - 1;
            ans = mid + k;
        } else {
            low = mid + 1
        }
    }
    return ans;
}