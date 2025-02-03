/**
 Given a binary tree, find its height.

The height of a tree is defined as the number of edges on the longest path from the root to a leaf node. A leaf node is a node that does not have any children.

Examples:

Input: root[] = [12, 8, 18, 5, 11] 

       12
      /  \
     8    18
    / \
   5   11

 
Output: 2
Explanation: One of the longest path from the root (node 12) goes through node 8 to node 5, which has 2 edges.
 */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function height(root){
    if(!root) return -1;                  // If the root is null, return -1
    let left = this.height(root.left);    // Get the height of the left subtree
    let right = this.height(root.right);  // Get the height of the right subtree
    return Math.max(left, right) + 1;     // Return the maximum of the left and right subtrees plus 1
}

const root = new Node(12);
root.left = new Node(8);
root.right = new Node(18);
root.left.left = new Node(5);
root.left.right = new Node(11);

console.log(height(root));