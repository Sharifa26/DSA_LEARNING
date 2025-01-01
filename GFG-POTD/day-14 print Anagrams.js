/**
 Given an array of strings, return all groups of strings that are anagrams. The groups must be created in order of their appearance in the original array. Look at the sample case for clarification.

Note: The final output will be in lexicographic order.

Examples:

Input: arr[] = ["act", "god", "cat", "dog", "tac"]
Output: [["act", "cat", "tac"], ["god", "dog"]]
Explanation: There are 2 groups of anagrams "god", "dog" make group 1. "act", "cat", "tac" make group 2.

Input: arr[] = ["no", "on", "is"]
Output: [["is"], ["no", "on"]]
Explanation: There are 2 groups of anagrams "is" makes group 1. "no", "on" make group 2.

Input: arr[] = ["listen", "silent", "enlist", "abc", "cab", "bac", "rat", "tar", "art"]
Output: [["abc", "cab", "bac"], ["listen", "silent", "enlist"], ["rat", "tar", "art"]]
Explanation: 
Group 1: "abc", "bac", and "cab" are anagrams.
Group 2: "listen", "silent", and "enlist" are anagrams.
Group 3: "rat", "tar", and "art" are anagrams.
 */

const  Anagram =(arr)=>{
    let map = new Map();

    // Step 1: Group words by their sorted version
    for (let str of arr) {
        // Sort the string to get the "anagram key"
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    // Step 2: Get all groups from the map
    let result = Array.from(map.values());
    //result.forEach(group => group.sort()); // Sort each group
    result.sort((a, b) => (a[0] < b[0] ? -1 : 1)); // Sort groups based on the first element of each group

    return result;
}
let arr = ["act", "god", "cat", "dog", "tac"];
console.log(Anagram(arr));
