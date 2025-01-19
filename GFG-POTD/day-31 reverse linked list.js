/**
 Given the head of a linked list, the task is to reverse this list and return the reversed head.

Examples:

Input: head: 1 -> 2 -> 3 -> 4 -> NULL
Output: head: 4 -> 3 -> 2 -> 1 -> NULL
Explanation:

Input: head: 2 -> 7 -> 10 -> 9 -> 8 -> NULL
Output: head: 8 -> 9 -> 10 -> 7 -> 2 -> NULL
Explanation:

Input: head: 2 -> NULL
Output: 2 -> NULL
Explanation:
 */

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next; // Store the next node
        current.next = prev;        // Reverse the current node's pointer
        prev = current;             // Move `prev` to the current node
        current = nextNode;         // Move `current` to the next node  
    }

    return prev; // `prev` will be the new head of the reversed list
};

// Helper function to print the linked list
const printList = (head) => {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> ") + " -> NULL");
};

// Example Usage
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))));
console.log("Original List:");
printList(head);

const reversedHead = reverseLinkedList(head);
console.log("Reversed List:");
printList(reversedHead);
