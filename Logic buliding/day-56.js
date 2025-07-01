/**
 * Write a program to give the following output for the given inputs.
 * 
 * Example 1:
 * input: "3[a]2[bc]"
 * output: "aaabcbc"
 * 
 * Eaxmple 2:
 * input: "3[a2[c]]"
 * output: "accaccacc"
 */

const print =(s)=>{
    let stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (!isNaN(char)) {
            // If the character is a digit, build the number
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // Push current string and number to stack
            stack.push([currentStr, currentNum]);
            // Reset for new sequence
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            // Pop from stack and build the new string
            const [prevStr, num] = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            // Normal character, just append
            currentStr += char;
        }
    }

    return currentStr;
}

console.log(print("3[a2[bb]]"));
