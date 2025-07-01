/**
 * Given an array arr. Find if there are two pairs (a, b) and (c, d) such that a+b = c+d.
 * 
 * Examples:

Input: arr[] = [3, 4, 7, 1, 2, 9, 8] 
Output: true
Explanation: (3, 7) and (9, 1) are the pairs whosesum are equal.  
Input: arr[] = [65, 30, 7, 90, 1, 9, 8]
Output: false
Explanation: There is no pair.
 */



function findPairs(arr) {
    // code here
    let n = arr.length
    let sumMap = new Map();


    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {

            let sum = arr[i] + arr[j]

            if (sumMap.has(sum)) {

                let p = sumMap.get(sum);
                if (p[0] !== i && p[0] !== j &&
                    p[1] !== i && p[1] !== j) {

                    return [arr[p[0]], arr[p[1]], arr[i], arr[j]]
                }

            }
            sumMap.set(sum, [i, j])
        }
    }

    return [];
}

let arr = [1, 2, 3, 4, 5]

console.log(findPairs(arr))