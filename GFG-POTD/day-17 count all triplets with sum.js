/**
 Given a sorted array arr[] and a target value, the task is to count triplets (i, j, k) of valid indices, such that arr[i] + arr[j] + arr[k] = target and i < j < k.

Examples:

Input: arr[] = [-3, -1, -1, 0, 1, 2], target = -2
Output: 4
Explanation: Two triplets that add up to -2 are:
arr[0] + arr[3] + arr[4] = (-3) + 0 + (1) = -2
arr[0] + arr[1] + arr[5] = (-3) + (-1) + (2) = -2
arr[0] + arr[2] + arr[5] = (-3) + (-1) + (2) = -2
arr[1] + arr[2] + arr[3] = (-1) + (-1) + (0) = -2
Input: arr[] = [-2, 0, 1, 1, 5], target = 1
Output: 0
Explanation: There is no triplet whose sum is equal to 1.
 */


const count =(arr,target)=>{
    let ans =0;
    for(let i=0;i<arr.length;i++){
        let j=i+1,k=arr.length-1;
        while(j<k){
            let sum = arr[i]+arr[j]+arr[k];
            if(sum <target){
                j++;
            }else if(sum>target){
                k--;
            }else{
                let el1=arr[j],el2=arr[k],c1=0,c2=0;
                while(j<=k && arr[j] == el1){
                    j++;
                    c1++;
                }
                while(j<=k && arr[k] == el2){
                    c2++;
                    k--;
                }
                if(el1 == el2){
                    ans += (c1*(c1-1))/2;
                }else{
                    ans += (c1*c2);
                }
            }
        }
    }
    return ans;
}

let arr = [-3, -1, -1, 0, 1, 2], target = -2
console.log(count(arr,target));
