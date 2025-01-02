/**
 Given an unsorted array of integers, find the number of continuous subarrays having sum exactly equal to a given number k.

Examples:

Input: arr = [10, 2, -2, -20, 10], k = -10
Output: 3
Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.

Input: arr = [9, 4, 20, 3, 10, 5], k = 33
Output: 2
Explaination: Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.

Input: arr = [1, 3, 5], k = 0
Output: 0
Explaination: No subarray with 0 sum.
 */

const subarray=(arr,k)=>{
    let prefixSum = 0; // Tracks the cumulative sum of elements
    let count = 0; // Counts subarrays with sum equal to k
    let map = new Map(); // Stores prefix sums and their frequencies

    // Initialize the map with a base case
    map.set(0, 1); // For cases where prefixSum equals k directly

    for (let num of arr) {
        // Add the current number to prefixSum
        prefixSum += num;

        // Check if (prefixSum - k) exists in the map
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        // Update the frequency of prefixSum in the map
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;

}

let arr = [9, 4, 20, 3, 10, 5], k = 33;
console.log(subarray(arr,k)); 