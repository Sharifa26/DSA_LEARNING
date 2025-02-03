/**
 Given a root of a binary tree with n nodes, the task is to find its level order traversal. Level order traversal of a tree is breadth-first traversal for the tree.

 Examples:

 1-   Input: root[] = [1, 2, 3]

              1
             / \
            2   3

        Output: [[1], [2, 3]]


  2-  Input: root[] = [10, 20, 30, 40, 50]
    
              10
            /    \
          20      30
        /   \   
      40   50  

      Output: [[10], [20, 30], [40, 50]]


 3-   Input: root[] = [1, 3, 2, N, N, N, 4, 6, 5]

              1
            /   \
          3      2
                   \
                    4
                    / \
                   6   5

      Output: [[1], [3, 2], [4], [6, 5]]



Constraints:

1 ≤ number of nodes ≤ 105
0 ≤ node->data ≤ 109

 */

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let levelOrderTraversal = (root) => {
    let result = [];
    let queue = [];
    queue.push(root);                      // Add root to the queue  Eg: root = 1
    while(queue.length !== 0){
        let size = queue.length;           // Get the size of the queue
        let level = [];                    // Create an empty array to store the nodes of the current level
        while(size--){                     // While the queue is not empty
            let node = queue.shift();      // Remove the first node from the queue eg: node = 1
            level.push(node.data);         // Add the node to the current level
            if(node.left != null) queue.push(node.left); // Add the left child of the node to the queue if it exists
            if(node.right != null) queue.push(node.right);// Add the right child of the node to the queue if it exists
        }
        result.push(level); // Add the current level to the result
    }
    return result;
}


// Example Usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
const root2 = new Node(10);
root2.left = new Node(20);
root2.right = new Node(30);
root2.left.left = new Node(40);
root2.left.right = new Node(50);


console.log(levelOrderTraversal(root));
console.log(levelOrderTraversal(root2));
