/**
 Given a head of the singly linked list. If a loop is present in the list then return the first node of the loop else return NULL.

Custom Input format:
A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

Examples:

   1 → 3 → 2 → 4 → 5
       ↑            ↓
       ← ← ← ← ← ← ← ←


Input:
 
Output: 3
Explanation: We can see that there exists a loop in the given linked list and the first node of the loop is 3.
Input:
   1 → 3 → 2 → 1

 
Output: -1
Explanation: No loop exists in the above linked list.So the output is -1.
Constraints:
1 <= no. of nodes <= 106
1 <= node->data <= 106
 */

class Node {
    constructor(data) {
        this.data = data; // data -> value stored in node
        this.next = null;
    }
}

const findaaFirstNode = (head) => {
    let slow = head, fast = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            slow = head;
            while(slow != fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}

// Example Usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(3);

console.log(findaaFirstNode(head));

