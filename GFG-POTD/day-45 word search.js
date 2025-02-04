/** 
 You are given a two-dimensional mat[][] of size n*m containing English alphabets and a string word. Check if the word exists on the mat. The word can be constructed by using letters from adjacent cells, either horizontally or vertically. The same cell cannot be used more than once.

Examples :

Input: mat[][] = [['T', 'E', 'E'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"

        +---+---+---+
        | T | E | E | 
        +---+---+---+
        | S | G | K |  
        +---+---+---+
        | T | E |L  |   
        +---+---+---+

Output: true
Explanation:

The letter cells which are used to construct the "GEEK" are colored.


Input: mat[][] = [['T', 'E', 'U'], ['S', 'G', 'K'], ['T', 'E', 'L']], word = "GEEK"

        +---+---+---+
        | T | E | U | 
        +---+---+---+
        | S | G | K |  
        +---+---+---+
        | T | E |L  |   
        +---+---+---+
Output: false
Explanation:

It is impossible to construct the string word from the mat using each cell only once.


Input: mat[][] = [['A', 'B', 'A'], ['B', 'A', 'B']], word = "AB"

        +---+---+---+
        | A | B | A | 
        +---+---+---+
        | B | A | B |   
        +---+---+---+
Output: true
Explanation:

There are multiple ways to construct the word "AB".


Constraints:
1 ≤ n, m ≤ 6
1 ≤ L ≤ 15
mat and word consists of only lowercase and uppercase English letters.
*/

function wordSearch(mat, word) {
    let n = mat.length;
    let m = mat[0].length;
    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j] == word[0]) {
                dfs(mat, word, i, j, dp);
            }
        }
    }

    return dp[n - 1][m - 1];
}

function dfs(mat, word, i, j, dp) {
    if (i < 0 || i >= mat.length || j < 0 || j >= mat[0].length || word.length == 0) {
        return;
    }

    if (dp[i][j] == 1) {
        return;
    }

    dp[i][j] = 1;

    if (mat[i][j] == word[0]) {
        if (word.length == 1) {
            return;
        }
        word = word.slice(1);
        dfs(mat, word, i - 1, j, dp);
        dfs(mat, word, i + 1, j, dp);
        dfs(mat, word, i, j - 1, dp);
        dfs(mat, word, i, j + 1, dp);
    }
}




