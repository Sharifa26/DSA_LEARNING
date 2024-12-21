/**
 Input: mat[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

        1 -> 2 -> 3 -> 4
                       |
        5 -> 6 ->  7   8
        |          |   |
        9   10 <-  11  12
        |               |
        13<- 14<- 15 <- 16
 */

let mat = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
const sprial = (mat) => {
    let r = mat.length, c = mat[0].length;
    let top = 0, down = r - 1;
    let left = 0, right = c - 1, d = 0;
    let ans = [];

    while (top <= down && left <= right) {
        switch (d) {
            case 0: // Left to Right
                for (let i = left; i <= right; i++) {
                    ans.push(mat[top][i]);
                }
                top++;
                break;

            case 1: // Top to Bottom
                for (let i = top; i <= down; i++) {
                    ans.push(mat[i][right]);
                }
                right--;
                break;

            case 2: // Right to Left
                for (let i = right; i >= left; i--) {
                    ans.push(mat[down][i]);
                }
                down--;
                break;

            case 3: // Bottom to Top
                for (let i = down; i >= top; i--) {
                    ans.push(mat[i][left]);
                }
                left++;
                break;
        }
        //cycle direction.
        if (d === 3) {
            d = 0;
        } else {
            d++;
        }
    }
    return ans;
}

console.log(sprial(mat));
