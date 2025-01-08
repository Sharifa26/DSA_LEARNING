/**
 Problem statement
For a given a string(str) and a character X, write a function to remove all the occurrences of X from the given string.

The input string will remain unchanged if the given character(X) doesn't exist in the input string.



Input Format:
The first line of input contains a string without any leading and trailing spaces.
The second line of input contains a character(X) without any leading and trailing spaces.
Output Format:
The only line of output prints the updated string.
Note:
You are not required to print anything explicitly. It has already been taken care
of.
 */

/**
 Sample Input 1:
aabccbaa
a
Sample Output 1:
bccb
Sample Input 2:
xxyyzxx
y
Sample Output 2:
xxzxx
 */

function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
    let str = String(readLine()); 
    let x = String(readLine()); 

    /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */
    const remove = (str, x) => {
        const regex = new RegExp(x, 'g');
        return str.replace(regex, '');
    }
   /*
   Log your output here 
   eg: console.log(x);
   */
    console.log(remove(str, x));

}