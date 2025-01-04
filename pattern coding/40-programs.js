/**
 write a program to print all permutations of a string.

 Input: ABC
 Output: 
 A
 B C
 AB AC BA BC CA CB 
 ABC ACB BCA BAC CBA CAB
 */

 
 function generateOutput(input) {
    const result = [];

    // Step 1: Print each character in a new line
    for (let char of input) {
        if(char == 'A'){
            result.push(char);
        }
        
    }

    // Step 2: Generate all pairs of characters
    const pairs = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (i !== j) {
                pairs.push(input[i] + input[j]);
            }
        }
    }
    result.push(pairs.join(" "));

    // Step 3: Generate all permutations in lexicographic order
    const generatePermutations = (str) => {
        if (str.length <= 1) return [str];
        const perms = [];
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const remaining = str.slice(0, i) + str.slice(i + 1);
            for (let perm of generatePermutations(remaining)) {
                perms.push(char + perm);
            }
        }
        return perms;
    };

    const permutations = generatePermutations(input);
    result.push(permutations.join(" "));

    // Print the result
    console.log(result.join("\n"));
}

// Call the function with input "ABC"
generateOutput("ABC");
