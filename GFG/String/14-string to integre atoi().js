/**
 Given a string s, the task is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.

Cases for atoi() conversion:

Skip any leading whitespaces.
Check for a sign ('+' or '-'), default to positive if no sign is present.
Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return 0.
If the integer is greater than 231 - 1, then return 231 - 1 and if the integer is smaller than -231, then return -231.
Examples:

Input: s = "-123"
Output: -123

Input: s = " -"
Output: 0
Explanation: No digits are present, therefore 0.

Input: s = " 1231231231311133"
Output: 2147483647
Explanation: The converted number is greater than 231 - 1, therefore print 231 - 1 = 2147483647.

Input: s = "-999999999999"
Output: -2147483648
Explanation: The converted number is smaller than -231, therefore print -231 = -2147483648.

Input: s = " -0012gfg4"
Output: -12
Explanation: Nothing is read after -12 as a non-digit character 'g' was encountered.
 */


// JavaScript Program to implement atoi() function

function myAtoi(s) {
    let sign = 1, res = 0, idx = 0;

    // Ignore leading whitespaces
    while (idx < s.length && s[idx] === ' ') {
        idx++;
    }

    // Store the sign of number
    if (idx < s.length && (s[idx] === '-' || s[idx] === '+')) {
        if (s[idx] === '-') {
            sign = -1;
        }
        idx++;
    }

    // Construct the number digit by digit
    while (idx < s.length && s[idx] >= '0' && s[idx] <= '9') {
        
        // Handling overflow/underflow test case
        if ((res > Math.pow(2, 31) / 10) || ((res === Math.floor(Math.pow(2, 31) / 10)) && (s[idx] - '0' > 7))) {
            
            return sign === 1 ? (Math.pow(2, 31) - 1) : -Math.pow(2, 31);
        }

        // Append current digit to the result
        res = 10 * res + (s[idx] - '0');
        idx++;
    }
    return (res * sign == -0 ? 0 : res * sign);
}

const s = "  -0012756543453";
console.log(myAtoi(s));