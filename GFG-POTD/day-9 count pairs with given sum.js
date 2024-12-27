/**
Given an array arr[] and an integer target. You have to find numbers of pairs in array arr[] which sums up to given target.

Examples:

Input: arr[] = [1, 5, 7, -1, 5], target = 6 
Output: 3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) and (1, 5). 

Input: arr[] = [1, 1, 1, 1], target = 2 
Output: 6
Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).

Input: arr[] = [10, 12, 10, 15, -1], target = 125
Output: 0
 */

const sum =(arr,target)=>{
    //this apporach is a o(n log n)
    // let count = 0;
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]+arr[j]===target){
    //             count++;
    //         }
    //     }
    // } 
    // return count;

    let count = 0;
    let mp = new Map();
    for(let i=0;i<arr.length;i++){
        if(mp.has(target - arr[i])){
            count += mp.get(target - arr[i]);
        }
        mp.set(arr[i],(mp.get(arr[i]) || 0) +1);
    }
    //console.log(mp);
    return count;
}
let arr = [1, 5, 7, -1, 5], target = 6;
console.log(sum(arr,target));
