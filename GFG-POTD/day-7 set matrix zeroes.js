/**
 You are given a 2D matrix mat[][] of size n×m. The task is to modify the matrix such that if mat[i][j] is 0, all the elements in the i-th row and j-th column are set to 0 and do it in constant space complexity.

Examples:

Input: mat[][] = [[1, -1, 1],
                [-1, 0, 1],
                [1, -1, 1]]
Output: [[1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]]
Explanation: mat[1][1] = 0, so all elements in row 1 and column 1 are updated to zeroes.
Input: mat[][] = [[0, 1, 2, 0],
                [3, 4, 5, 2],
                [1, 3, 1, 5]]
Output: [[0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]]
Explanation: mat[0][0] and mat[0][3] are 0s, so all elements in row 0, column 0 and column 3 are updated to zeroes.

 */

const zero=(mat)=>{
    const r = mat.length, c = mat[0].length;
    let isFirstColZero = false;

    // Use the first row and first column as markers
    for (let i = 0; i < r; i++) {
        if (mat[i][0] === 0) {
            isFirstColZero = true;
        }
        for (let j = 1; j < c; j++) {
            if (mat[i][j] === 0) {
                mat[i][0] = 0;
                mat[0][j] = 0;
            }
        }
    }

    // Zero out cells based on markers
    for (let i = 1; i < r; i++) {
        for (let j = 1; j < c; j++) {
            if (mat[i][0] === 0 || mat[0][j] === 0) {
                mat[i][j] = 0;
            }
        }
    }

    // Handle the first row
    if (mat[0][0] === 0) {
        for (let j = 0; j < c; j++) {
            mat[0][j] = 0;
        }
    }

    // Handle the first column
    if (isFirstColZero) {
        for (let i = 0; i < r; i++) {
            mat[i][0] = 0;
        }
    }

    return mat;
}

let mat = [[1, -1, 1],
           [-1, 0, 1],
           [1, -1, 1]]

console.log(zero(mat));
