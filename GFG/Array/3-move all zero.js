/**https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/video/Mjc4OTY%3D
Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements. Do the mentioned change in the array in place.

Examples:

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.

Input: arr[] = [10, 20, 30]
Output: [10, 20, 30]
Explanation: No change in array as there are no 0s.

Input: arr[] = [0, 0]
Output: [0, 0]
Explanation: No change in array as there are all 0s.

*/

let arr = [1, 2, 0, 4, 3, 0, 5, 0]
const move = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[count]] = [arr[count], arr[i]];
            count += 1;
        }
    }
    return arr;
}

console.log(move(arr));
