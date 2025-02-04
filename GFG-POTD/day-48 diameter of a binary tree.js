/**
 Given a binary tree, the diameter (also known as the width) is defined as the number of edges on the longest path between two leaf nodes in the tree. This path may or may not pass through the root. Your task is to find the diameter of the tree.

Examples:

Input: root[] = [1, 2, 3]

       1
      / \        
     2   3

Output: 2
Explanation: The longest path has 2 edges (node 2 -> node 1 -> node 3).



Input: root[] = [5, 8, 6, 3, 7, 9]

        5
       / \
      8   6
     / \   \
    3   7   9

Output: 4
Explanation: The longest path has 4 edges (node 3 -> node 8 -> node 5 -> node 6 -> node 9).

Constraints:
1 ≤ number of nodes ≤ 105
0 ≤ node->data ≤ 105
 */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

this.ans = 0;// Initialize ans for each function call

function calc(root) {
    if (root == null) {// If the root is null, return 0
        return 0;
    }
    let left = calc(root.left);// Get the height of the left subtree
    let right = calc(root.right);// Get the height of the right subtree
    this.ans = Math.max(this.ans, left + right);// Update ans
    return Math.max(left, right) + 1;// Return the maximum of the left and right subtrees plus 1
}

/**
 * @param {Node} root
 * @returns {number}
 */
function diameter(root) {
    this.ans = 0;  // Reset ans for each function call
    calc(root);// Call calc function
    return this.ans;// Return ans
}

// Example Usage
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

const root2 = new Node(5);
root2.left = new Node(8);
root2.right = new Node(6);
root2.left.left = new Node(3);
root2.left.right = new Node(7);
root2.right.left = new Node(9);

console.log(diameter(root));    
console.log(diameter(root2));