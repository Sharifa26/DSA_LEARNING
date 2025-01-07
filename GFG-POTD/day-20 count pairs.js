/**
 You are given an integer target and an array arr[]. You have to find number of pairs in arr[] which sums up to target. It is given that the elements of the arr[] are in sorted order.
Note: pairs should have elements of distinct indexes. 

Examples :

Input: arr[] = [-1, 1, 5, 5, 7], target = 6
Output: 3
Explanation: There are 3 pairs which sum up to 6 : {1, 5}, {1, 5} and {-1, 7}.
Input: arr[] = [1, 1, 1, 1], target = 2
Output: 6
Explanation: There are 6 pairs which sum up to 2 : {1, 1}, {1, 1}, {1, 1}, {1, 1}, {1, 1} and {1, 1}.
Input: arr[] = [-1, 10, 10, 12, 15], target = 125
Output: 0
Explanation: There is no such pair which sums up to 4.
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