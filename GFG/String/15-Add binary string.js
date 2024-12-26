/**
 Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

Input: s1 = "1101", s2 = "111"
Output: 10100
Explanation:
 1101
+ 111
10100

Input: s1 = "00100", s2 = "010"
Output: 110
Explanation: 
  100
+  10
  110
 */
let s1 = "00100", s2 = "010";
const binaryAddition = (s1, s2) => {
    // Remove leading zeros
    s1 = s1.replace(/^0+/, '') || '0';
    s2 = s2.replace(/^0+/, '') || '0';
    
    // Ensure s1 is the longer string
    if (s1.length < s2.length) {
        [s1, s2] = [s2, s1]; // Swap s1 and s2
    }

    let n = s1.length;
    let m = s2.length;
    let carry = 0;
    let result = [];

    // Perform binary addition from right to left
    for (let i = 0; i < n; i++) {
        // Get bits from s1 and s2 (adjust for length difference)
        let bit1 = s1[n - 1 - i] - '0'; // Current bit of s1
        let bit2 = i < m ? s2[m - 1 - i] - '0' : 0; // Current bit of s2 or 0

        // Calculate sum and carry
        let sum = bit1 + bit2 + carry;
        result.push(sum % 2); // Store the resulting bit
        carry = Math.floor(sum / 2); // Update carry
    }

    // If there's a remaining carry, prepend it to the result
    if (carry > 0) {
        result.push(carry);
    }

    // Reverse the result array to get the correct binary number
    return result.reverse().join('');
};


console.log(binaryAddition(s1,s2));
