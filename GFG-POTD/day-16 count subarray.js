/**
 Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their elements as k.

Examples: 

Input: arr[] = [4, 2, 2, 6, 4], k = 6
Output: 4
Explanation: The subarrays having XOR of their elements as 6 are [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], and [6]. Hence, the answer is 4.
Input: arr[] = [5, 6, 7, 8, 9], k = 5
Output: 2
Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]. Hence, the answer is 2.
Input: arr[] = [1, 1, 1, 1], k = 0
Output: 4
Explanation: The subarrays are [1, 1], [1, 1], [1, 1] and [1, 1, 1, 1].
 */

function countSubarraysWithXOR(arr, k) {
    let count = 0;
    let prefixXOR = 0;
    const xorMap = new Map();
    
    // Initialize the map to handle the case where prefixXOR == k
    xorMap.set(0, 1);

    for (let num of arr) {
        // Calculate the prefix XOR up to the current element
        prefixXOR ^= num;

        // Check if there's a prefix XOR that matches the required XOR
        let targetXOR = prefixXOR ^ k;
        if (xorMap.has(targetXOR)) {
            count += xorMap.get(targetXOR);
        }

        // Add/update the current prefix XOR in the map
        xorMap.set(prefixXOR, (xorMap.get(prefixXOR) || 0) + 1);
    }

    return count;
}

// Example usage:
const arr1 = [4, 2, 2, 6, 4];
const k1 = 6;
console.log(countSubarraysWithXOR(arr1, k1)); // Output: 4
