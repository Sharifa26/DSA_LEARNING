//https://www.naukri.com/code360/problems/next-greater-element_799354?leftPanelTabValue=PROBLEM
/**
 Problem statement
You are given an array arr of length N. You have to return a list of integers containing the NGE(next greater element) of each element of the given array. The NGE for an element X is the first greater element on the right side of X in the array. Elements for which no greater element exists, consider the NGE as -1.

For Example :

If the given array is [1, 3, 2], then you need to return [3, -1, -1]. Because for 1, 3 is the next greater element, for 3 it does not have any greater number to its right, and similarly for 2.


Sample Input 1 :
1
4
1 2 4 3
Sample Output 1 :
2 4 -1 -1
Sample Input 2 :
1
4
9 3 6 5
Sample Output 2 :
-1 6 -1 -1
Explanation for Sample Input 2 :
For element 9, there is no next greater element. So -1 would be the next greater element.
For element 3, 6 is the next greater element. 
For element 6, there is no next greater element. So -1 would be the next greater element.
For element 5, there is no next greater element. So -1 would be the next greater element.
 */

/**
 Input and output format:

 
Input Format:
The first line of input contains a single integer T, representing the number of test cases or queries to be run.
Then the T test cases follow.
The first line of each test case contains an integer N, representing the length of the input array (ARR).
The second line contains N single space-separated integers representing elements of the array arr.
Output Format:
For each test case, print a list of integers each representing the NGE(next greater element) of each element of the given array in a single line.
Note:
You are not required to print the expected output, it has already been taken care of. Just implement the function.
 */

function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
    let t = String(readLine())// no of test cases
    while (t--) {
        let n = parseInt(readLine());//no of elements in an arr
        let line = readLine();//receivie the element first After
        let arr = line ? line.replace(/\s+$/g, '').split(' ').map(Number) : []; //convert into a Array of numbers

        //console.log(n,arr)

        // If `arr` is empty, avoid processing
        if (arr.length === 0 || isNaN(n)) {
            console.log([]);
            return;
        }

        /*
        Call your function with the input/parameters read above
        eg: let x = example(var_name, arr);
        */
        const x = (n, arr) => {
            let result = [];
            for (let i = 0; i < n; i++) {
                let found = false; // Flag to check if next greater is found
                for (let j = i + 1; j < n; j++) {
                    if (arr[j] > arr[i]) {
                        result.push(arr[j]);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    result.push(-1);
                }
            }
            return result;
        }

        /*
        Log your output here 
        eg: console.log(x);
        */
        console.log(x(n, arr).join(' ')); // we have to send the out in like this '5 -1 -1' not as in arr like [5,-1,-1]

    }


}