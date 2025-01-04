/**
 Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

Examples:

Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.
Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.
 */

const sorting=(arr)=>{
    let n=arr.length;
    let low=0,mid=0,high=n-1;
    while(mid<=high){
        if(arr[mid] ==0){
            [arr[low],arr[mid]]=[arr[mid],arr[low]];
            low++;
            mid++;
        }else if(arr[mid] ==1){
            mid =mid+1;
        }
        else{
            [arr[mid],arr[high]]=[arr[high],arr[mid]];
            high--;
        }
    }
    return arr;
}

let arr=[0, 1, 2, 0, 1, 2];
console.log(sorting(arr));
