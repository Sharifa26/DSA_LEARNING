/**
 Implement the function power(b, e), which calculates b raised to the power of e (i.e. be).

Examples:

Input: b = 3.00000, e = 5
Output: 243.00000
Input: b = 0.55000, e = 3
Output: 0.16638
Input: b = -0.67000, e = -7
Output: -16.49971


Constraints:

-100.0 < b < 100.0
-109 <= e <= 109
Either b is not zero or e > 0.
-104 <= be <= 104
 */

const power = (b, e) => {
    return Math.pow(b,e);
}

console.log(power(3.00000, 5));
console.log(power(0.55000, 3));
console.log(power(-0.67000, -7));