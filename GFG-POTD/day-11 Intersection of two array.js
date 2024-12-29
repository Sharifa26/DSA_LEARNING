/**
 Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. Intersection of two arrays is said to be elements that are common in both arrays. The intersection should not have duplicate elements and the result should contain items in any order.

Note: The driver code will sort the resulting array in increasing order before printing.

Examples:

Input: a[] = [1, 2, 1, 3, 1], b[] = [3, 1, 3, 4, 1]
Output: [1, 3]
Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements.

Input: a[] = [1, 1, 1], b[] = [1, 1, 1, 1, 1]
Output: [1]
Explanation: 1 is the only common element present in both the arrays.

Input: a[] = [1, 2, 3], b[] = [4, 5, 6]
Output: []
Explanation: No common element in both the arrays.
 */

const intersection =(a,b)=>{
    let setA = new Set(a);
    let setB = new Set(b);
    let intersection = [...setA].filter(x => setB.has(x));
    return intersection.sort((a, b) => a - b);
}

let a = [1, 2, 1, 3, 1], b = [3, 1, 3, 4, 1];
console.log(intersection(a,b));

