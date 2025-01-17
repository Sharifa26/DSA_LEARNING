/** 
 Given an array, arr[] construct a product array, res[] where each element in res[i] is the product of all elements in arr[] except arr[i]. Return this resultant array, res[].
Note: Each element is res[] lies inside the 32-bit integer range.

Examples:

Input: arr[] = [10, 3, 5, 6, 2]
Output: [180, 600, 360, 300, 900]
Explanation: For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
For i = 4, res[i] = 10 * 3 * 5 * 6 is 900.
Input: arr[] = [12, 0]
Output: [0, 12]
Explanation: For i = 0, res[i] is 0.
For i = 1, res[i] is 12.
*/


// this Method will not work for the case when there is a zero in the array
// const productExceptSelf = (arr) => {
//     let n = arr.length;
//     let product = 1;
//     for(let i =0;i<n;i++){
//         product *= arr[i];
//     }
//     for(let i =0;i<n;i++){
//         arr[i] = product / arr[i];
//     }
//     return arr;
// }

const productExceptSelf = (arr) => {
    let n = arr.length,totalPro =1,zerocnt=0;
    let res = new Array(n).fill(0);
    for(let e of arr){
        if(e === 0) zerocnt++;
        else totalPro *= e;
    }
    if(zerocnt > 1){
        return res;
    }
    if(zerocnt === 1){
        for(let i=0;i<n;i++){
            if(arr[i] === 0){
                res[i] = totalPro;
            }
        }
        return res;
    }
    for(let i =0;i<n;i++){
        res[i] = totalPro / arr[i];
    }
    return res;
}

console.log(productExceptSelf([10, 3, 5, 6, 2]));
console.log(productExceptSelf([12, 0]));
