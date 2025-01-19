/**
 Given the head of a singly linked list, your task is to left rotate the linked list k times.

Examples:

Input: head = 10 -> 20 -> 30 -> 40 -> 50, k = 4
Output: 50 -> 10 -> 20 -> 30 -> 40
Explanation:
Rotate 1: 20 -> 30 -> 40 -> 50 -> 10
Rotate 2: 30 -> 40 -> 50 -> 10 -> 20
Rotate 3: 40 -> 50 -> 10 -> 20 -> 30
Rotate 4: 50 -> 10 -> 20 -> 30 -> 40

Input: head = 10 -> 20 -> 30 -> 40 , k = 6
Output: 30 -> 40 -> 10 -> 20 
 
 */

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

const leftRotateLinkedList = (head, k) => {
    if (!head || !head.next || k <= 0) return head;

    // Step 1: Calculate the length of the linked list
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: Modulo k with length to reduce unnecessary rotations
    k = k % length;
    if (k === 0) return head; // If k is 0, the list remains the same

    // Step 3: Connect the tail to the head to form a circular list
    tail.next = head;

    // Step 4: Find the new head and new tail positions
    let newTailPosition = k - 1; // Find the new tail's position
    let newTail = head;

    // Move to the new tail position
    while (newTailPosition > 0) {
        newTail = newTail.next;
        newTailPosition--;
    }

    let newHead = newTail.next; // The new head is the next node after the new tail
    newTail.next = null; // Break the circular connection

    return newHead;

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
const head = new ListNode(10, new ListNode(20, new ListNode(30, new ListNode(40, new ListNode(50, null)))));
console.log("Original List:");
printList(head);

const rotatedHead = leftRotateLinkedList(head, 4);
console.log("Rotated List:");
printList(rotatedHead);
