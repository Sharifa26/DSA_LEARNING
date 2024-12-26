/**
 Given an array arr[] of positive integers and another integer target. Determine if there exists two distinct indices such that the sum of there elements is equals to target.

Examples:

Input: arr[] = [1, 4, 45, 6, 10, 8], target = 16
Output: true
Explanation: arr[3] + arr[4] = 6 + 10 = 16.
Input: arr[] = [1, 2, 4, 3, 6], target = 11
Output: false
Explanation: None of the pair makes a sum of 11.
 */

const twoSum =(arr,target)=>{
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]+arr[j] == target){
    //             return true;
    //         }
    //     }
    // }
    // return false;
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        let complement = target - arr[i];
        if(map.has(complement)){
            return true;
        }
        map.set(arr[i],i);
        console.log(map);
        
    }
    return false;
}

let arr = [1, 4, 45, 6, 10, 8], target = 10
console.log(twoSum(arr,target));
