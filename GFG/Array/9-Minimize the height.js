/**
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/minimize-the-heights3351
 Given an array arr[] denoting heights of N towers and a positive integer K.

For each tower, you must perform exactly one of the following operations exactly once.

Increase the height of the tower by K
Decrease the height of the tower by K
Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

Examples :

Input: k = 2, arr[] = {1, 5, 8, 10}
Output: 5
Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.
Input: k = 3, arr[] = {3, 9, 12, 16, 20}
Output: 11
Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11. 
 */

const minimizeHeightDifference=(arr, k)=> {
    const n = arr.length;

    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Initialize the result as the difference between the largest and smallest elements
    let result = arr[n - 1] - arr[0];

    for(let i=1;i<n;i++){
        
        if(arr[i]-k <0){
            continue;
        }
        //Minimum height after modification.
        let minH = Math.min(arr[0]+k,arr[i]-k);

        //Maximum height after modification.
        let maxH = Math.max(arr[i-1]+k,arr[n-1]-k);

        result =Math.min(result,maxH-minH);

    }
    return result;

}


const arr2 = [1, 5, 8, 10];
const k2 = 2;
console.log(minimizeHeightDifference(arr2, k2)); // Output: 11
