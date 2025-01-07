/**
 You are given an integer array 'ARR' of size 'N' and an integer 'S'. Your task is to return the list of all pairs of elements such that each sum of elements of each pair equals 'S'.

Note:

Each pair should be sorted i.e the first value should be less than or equals to the second value. 

Return the list of pairs sorted in non-decreasing order of their first value. In case if two pairs have the same first value, the pair with a smaller second value should come first.


Input Format:
The first line of input contains two space-separated integers 'N' and 'S', denoting the size of the input array and the value of 'S'.
The second and last line of input contains 'N' space-separated integers, denoting the elements of the input array: ARR[i] where 0 <= i < 'N'.
Output Format:
Print 'C' lines, each line contains one pair i.e two space-separated integers, where 'C' denotes the count of pairs having sum equals to given value 'S'.
Note:
You are not required to print the output, it has already been taken care of. Just implement the function.
 */

/**
 example 

 Sample Input 1:
5 5
1 2 3 4 5
Sample Output 1:
1 4
2 3
Explaination For Sample Output 1:
Here, 1 + 4 = 5
      2 + 3 = 5
Hence the output will be, (1,4) , (2,3).
Sample Input 2:
5 0
2 -3 3 3 -2
Sample Output 2:
-3 3
-3 3
-2 2
Explaination For Sample Output 2:
Here, -3 + 3 = 0
-3 + 3 = 0
-2 + 2 = 0
 */

/**
 Requirements:
Find all pairs in the array such that the sum of their elements equals S.
Each pair should be sorted, i.e., the smaller value comes first.
The list of pairs should be sorted lexicographically, based on the first value and then the second.
Duplicate pairs are allowed if they are valid (as evident from -3 3 appearing twice in the second example).
 */


function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
    let vari0 = readLine(); // Input in the format "n s"
    let [N, S] = vari0.split(' ').map(Number); // Parse n and s as numbers
    let line = readLine();
    let ARR = line ? line.replace(/\s+$/g, '').split(' ').map(Number) : [];
    /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */
    const pair = (N, S, ARR) => {
         let pairs = [];

        // Iterate through all pairs
        for (let i = 0; i < N; i++) {
            for (let j = i + 1; j < N; j++) {
                if (ARR[i] + ARR[j] === S) {
                    // Sort the pair before adding
                    pairs.push([Math.min(ARR[i], ARR[j]), Math.max(ARR[i], ARR[j])]);
                }
            }
        }

        // Sort pairs lexicographically
        pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        let res = pairs.map(pair => pair.join(' '));
        return res;
    }

    /*
    Log your output here 
    eg: console.log(x);
    */
    let result = pair(N, S, ARR);
    console.log(result.join('\n'));
}
