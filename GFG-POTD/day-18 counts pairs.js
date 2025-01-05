/**
 Given an array arr[] and an integer target. You have to find the number of pairs in the array whose sum is strictly less than the target.

Examples:

Input: arr[] = [7, 2, 5, 3], target = 8
Output: 2
Explanation: There are 2 pairs with sum less than 8: (2, 5) and (2, 3). 
Input: arr[] = [5, 2, 3, 2, 4, 1], target = 5
Output: 4
Explanation: There are 4 pairs whose sum is less than 5: (2, 2), (2, 1), (3, 1) and (2, 1).
Input: arr[] = [2, 1, 8, 3, 4, 7, 6, 5], target = 7
Output: 6
Explanation: There are 6 pairs whose sum is less than 7: (2, 1), (2, 3), (2, 4), (1, 3), (1, 4) and (1, 5).
 */

const count=(arr,target)=>{
    //this apporach takes more space
    // let count=0;
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]+arr[j]<target){
    //             count++;
    //         }
    //     }
    // }
    // return count;

    arr.sort((a,b)=>a-b);
    let cn=0,st=0,end=arr.length-1;
    while(st<end){
        if(arr[st]+arr[end]<target){
            cn+=end-st;
            st++;
        }
        else{
            end--;
        }
    }
    return cn
}

let arr = [2, 1, 8, 3, 4, 7, 6, 5], target = 7;
console.log(count(arr,target));
