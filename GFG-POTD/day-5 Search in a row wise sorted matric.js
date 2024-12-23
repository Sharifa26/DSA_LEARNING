/**
 Given a row-wise sorted 2D matrix mat[][] of size n x m and an integer x, find whether element x is present in the matrix.
Note: In a row-wise sorted matrix, each row is sorted in itself, i.e. for any i, j within bounds, mat[i][j] <= mat[i][j+1].

Examples :

Input: mat[][] = [[3, 4, 9],[2, 5, 6],[9, 25, 27]], x = 9
Output: true
Explanation: 9 is present in the matrix, so the output is true.

Input: mat[][] = [[19, 22, 27, 38, 55, 67]], x = 56
Output: false
Explanation: 56 is not present in the matrix, so the output is false.
 */

const search = (mat, x) => {
    for (let i = 0; i < mat.length; i++) {
        let lo = 0, hi = mat[0].length - 1;
        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (mat[i][mid] == x) {
                return true;
            }
            if (mat[i][mid] < x) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }

    }
    return false;
}

let mat = [[3, 4, 9],[2, 5, 6],[9, 25, 27]], x = 9;
console.log(search(mat,x));
