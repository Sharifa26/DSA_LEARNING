/**https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/majority-vote
 You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there's not a majority vote, return an empty array. 

Note: The answer should be returned in an increasing format.

Examples:

Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
Output: [5, 6]
Explanation: 5 and 6 occur more n/3 times.

Input: arr[] = [1, 2, 3, 4, 5]
Output: []
Explanation: o candidate occur more than n/3 times.
 */

const majorityElement = (arr) => {
    const n = arr.length;
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // Phase 1: Find potential candidates
    for (let num of arr) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Phase 2: Verify candidates
    count1 = 0;
    count2 = 0;

    for (let num of arr) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    // Return the result sorted
    return result.sort((a, b) => a - b);
};

// Example usage
const arr = [1, 2, 3, 4, 5,1,1,2,4,1,2,2];
console.log(majorityElement(arr)); 
