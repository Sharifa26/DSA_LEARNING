//https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1

/**
 Input: mat[][] = [[1, 2, 3],
                  [4, 5, 6]
                  [7, 8, 9]]
Output: Rotated Matrix:
[3, 6, 9]
[2, 5, 8]
[1, 4, 7]
 */

/**
 Input: mat[][] = [[1, 2],
                  [3, 4]]
Output: Rotated Matrix:
[2, 4]
[1, 3]
 */
mat = [[1, 2],
[3, 4]]

const rotate = (mat) => {
    let n = mat.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // now swap rows as column
            swap(mat, i, j);
        }
    }
    for (let i = 0; i < (n / 2); i++) {
        for (let j = 0; j < n; j++) {
            let temp = mat[i][j];
            mat[i][j] = mat[n - 1 - i][j];
            mat[n - 1 - i][j] = temp;

        }
    }
    return mat;
}

const swap = (mat, i, j) => {
    let temp = mat[i][j];
    mat[i][j] = mat[j][i];
    mat[j][i] = temp;
}

console.log(rotate(mat));
