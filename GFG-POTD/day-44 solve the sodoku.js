/** 
 * Given an incomplete Sudoku configuration in terms of a 9x9  2-D interger square matrix, mat[][], the task is to solve the Sudoku. It is guaranteed that the input Sudoku will have exactly one solution.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Note: Zeros represent blanks to be filled with numbers 1-9, while non-zero cells are fixed and cannot be changed.

Examples:

Input: mat[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

Output:
[
  [5, 3, 4, 6, 7,8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

Explanation: Each row, column and 3 x 3 box of the output matrix contains unique numbers.

*/

function solve(mat, i, j) {
    if (i == 9) {
        return true;
    }

    let nextI, nextJ;
    if (j == 8) {
        nextI = i + 1;
        nextJ = 0;
    } else {
        nextI = i;
        nextJ = j + 1;
    }

    if (mat[i][j] != 0) {
        return solve(mat, nextI, nextJ);
    }

    for (let val = 1; val <= 9; val++) {
        if (isValid(mat, i, j, val)) {
            mat[i][j] = val;
            if (solve(mat, nextI, nextJ)) {
                return true;
            }
            mat[i][j] = 0; // Backtrack
        }
    }

    return false; // Ensure this is outside the loop
}

function isValid(mat, r, c, val) {
    for (let i = 0; i < 9; i++) {
        if (mat[i][c] == val || mat[r][i] == val) {
            return false;
        }
    }

    let startR = Math.floor(r / 3) * 3;
    let startC = Math.floor(c / 3) * 3;

    for (let i = startR; i < startR + 3; i++) {
        for (let j = startC; j < startC + 3; j++) {
            if (mat[i][j] == val) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku(mat) {
    solve(mat, 0, 0);
}

// Example Sudoku Board
let board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

solveSudoku(board);
console.log(board);
