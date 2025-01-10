/**
 Given an integer array arr[] and a number k. Find the count of distinct elements in every window of size k in the array.

Examples:

Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
Output:  [3, 4, 4, 3]
Explanation: Window 1 of size k = 4 is 1 2 1 3. Number of distinct elements in this window are 3. 
Window 2 of size k = 4 is 2 1 3 4. Number of distinct elements in this window are 4.
Window 3 of size k = 4 is 1 3 4 2. Number of distinct elements in this window are 4.
Window 4 of size k = 4 is 3 4 2 3. Number of distinct elements in this window are 3.
Input: arr[] = [4, 1, 1], k = 2
Output: [2, 1]
Explanation: Window 1 of size k = 2 is 4 1. Number of distinct elements in this window are 2. 
Window 2 of size k = 2 is 1 1. Number of distinct elements in this window is 1. 
Input: arr[] = [1, 1, 1, 1, 1], k = 3
Output: [1, 1, 1]

 */

const count = (arr, k) => {
    let map = new Map();
    let ans = new Array();
    k--; // Adjust k for zero-based indexing
    for (let i = 0; i < arr.length; i++) {
        // Increment the count of the current element in the map
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);

        // Skip the first k elements to allow the window to reach its full size
        if (i < k) {
            continue;
        }

        // Push the size of the map (distinct elements in the current window)
        ans.push(map.size);
        
        // Decrement or remove the element that is sliding out of the window
        if (map.get(arr[i - k]) === 1) {
            map.delete(arr[i - k]);// Remove the key if count becomes 0
        }

        else {
            // Decrement the count of the element that is sliding out of the window
            map.set(arr[i - k], map.get(arr[i - k]) - 1); //set(arr element , index value )
        }
    }
    return ans;
}

let arr = [1, 2, 1, 3, 4, 2, 3], k = 4;
console.log(count(arr, k));