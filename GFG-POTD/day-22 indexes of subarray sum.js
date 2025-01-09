/** 
 Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.

Note: If no such array is possible then, return [-1].

Examples:

Input: arr[] = [1, 2, 3, 7, 5], target = 12
Output: [2, 4]
Explanation: The sum of elements from 2nd to 4th position is 12.
Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target = 15
Output: [1, 5]
Explanation: The sum of elements from 1st to 5th position is 15.
Input: arr[] = [5, 3, 4], target = 2
Output: [-1]
Explanation: There is no subarray with sum 2.
*/

const subarray =(arr,target)=>{
    // let currSum = 0;
    // let map = new Map();
    // let ans = [];
    // map.set(0,-1);
    // for(let i=0;i<arr.length;i++){
    //     currSum += arr[i];
    //     if(map.has(currSum-target)){
    //         ans.push(map.get(currSum-target)+2);
    //         ans.push(i+1);
    //         return ans;
    //     }
    //     else{
    //         map.set(currSum,i);
    //     }
    // }
    // return [-1];

    let sum = 0;
    let j = 0;
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        // Shrink the window if the sum exceeds the target
        while (sum > target) {
            sum -= arr[j];
            j++;
        }

        // Check if the current sum equals the target
        if (sum === target) {
            ans.push(j + 1); // 1-based index for start
            ans.push(i + 1); // 1-based index for end
            break;
        }
    }

    // If no subarray is found
    if (ans.length === 0) {
        return [-1];
    }

    return ans;

}

let arr =[1, 2, 3, 7, 5], target = 12;
console.log(subarray(arr,target));
