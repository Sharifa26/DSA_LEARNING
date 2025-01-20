/**
 Write a Program to Print Below

 Input N =4

 Output :
        1  2  4  7
        3  5  8  11
        6  9  12 15
        10 13 14 16
 */

function generatePattern(N) {
       const matrix = Array.from({ length: N }, () => Array(N).fill(0)); // Initialize N x N matrix
       let num = 1;

       for (let col = 0; col < N; col++) {
              let i = 0;
              let j = col;
              while (j >= 0 && i < N) {
                     matrix[i][j] = num++;
                     i++;
                     j--;
              }
       }

       for (let row = 1; row < N; row++) {
              let i = row;
              let j = N - 1;
              while (i < N && j >= 0) {
                     matrix[i][j] = num++;
                     i++;
                     j--;
              }
       }

       return matrix;

}

function printMatrix(matrix) {
       for (const row of matrix) {
              console.log(row.join("  "));
       }
}

// Input
const N = 4;
const result = generatePattern(N);
printMatrix(result);
