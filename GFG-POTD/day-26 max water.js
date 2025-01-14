/**
 Given an array arr[] of non-negative integers, where each element arr[i] represents the height of the vertical lines, find the maximum amount of water that can be contained between any two lines, together with the x-axis.

Note: In the case of a single vertical line it will not be able to hold water.

Examples:

Input: arr[] = [1, 5, 4, 3]
Output: 6
Explanation: 5 and 3 are 2 distance apart. So the size of the base is 2. Height of container = min(5, 3) = 3. So, total area to hold water = 3 * 2 = 6.
Input: arr[] = [3, 1, 2, 4, 5]
Output: 12
Explanation: 5 and 3 are 4 distance apart. So the size of the base is 4. Height of container = min(5, 3) = 3. So, total area to hold water = 4 * 3 = 12.
Input: arr[] = [2, 1, 8, 6, 4, 6, 5, 5]
Output: 25 
Explanation: 8 and 5 are 5 distance apart. So the size of the base is 5. Height of container = min(8, 5) = 5. So, the total area to hold water = 5 * 5 = 25.
 */

function maxWater(arr) {
    let left = 0; // Pointer to the start of the array
    let right = arr.length - 1; // Pointer to the end of the array
    let maxArea = 0; // To store the maximum area

    while (left < right) {
        // Calculate the area between the two lines
        let height = Math.min(arr[left], arr[right]);
        let width = right - left;
        let area = height * width;

        // Update maxArea if the current area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointer pointing to the smaller height
        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example Usage
console.log(maxWater([1, 5, 4, 3])); // Output: 6
console.log(maxWater([3, 1, 2, 4, 5])); // Output: 12
console.log(maxWater([2, 1, 8, 6, 4, 6, 5, 5])); // Output: 25
