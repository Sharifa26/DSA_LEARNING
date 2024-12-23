/**
 Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

Note: It is guaranteed that the output fits in a 32-bit integer.

Examples

Input: arr[] = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
Input: arr[] = [-1, -3, -10, 0, 6]
Output: 30
Explanation: The subarray with maximum product is {-3, -10} with product = (-3) * (-10) = 30.
 */

const subarray=(arr)=>{
    let n = arr.length;
    let maxProd = Number.MIN_SAFE_INTEGER;

    // leftToRight to store product from left to Right
    let leftToRight = 1;

    // rightToLeft to store product from right to left
    let rightToLeft = 1;

    for (let i = 0; i < n; i++) {
        if (leftToRight === 0)
            leftToRight = 1;
        if (rightToLeft === 0)
            rightToLeft = 1;

        // calculate product from index left to right
        leftToRight *= arr[i];

        // calculate product from index right to left
        let j = n - i - 1;
        rightToLeft *= arr[j];
        maxProd = Math.max(leftToRight, rightToLeft, maxProd);
    }
    return maxProd;
}

let arr=[-2, 6, -3, -10, 0, 2];
console.log(subarray(arr));
