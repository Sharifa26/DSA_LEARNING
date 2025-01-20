/**
 Given the head of two sorted linked lists consisting of nodes respectively. The task is to merge both lists and return the head of the sorted merged list.

Examples:

Input: head1 = 5 -> 10 -> 15 -> 40, head2 = 2 -> 3 -> 20
Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> 40
Explanation:

Input: head1 = 1 -> 1, head2 = 2 -> 4
Output: 1 -> 1 -> 2 -> 4

 */

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const mergeTwoLists = (head1, head2) => {
    let newH = null, temp = null;

    while (head1 != null || head2 != null) {
        if (head1 != null && (head2 == null || (head1.data < head2.data))) {
            if (newH == null) {
                newH = head1;
                temp = head1;
            } else {
                temp.next = head1;
                temp = head1;
            }
            head1 = head1.next;
        } else {
            if (newH == null) {
                newH = head2;
                temp = head2;
            } else {
                temp.next = head2;
                temp = head2;
            }
            head2 = head2.next;
        }
    }
    temp.next = null;
    return newH;
};

// Helper function to print the linked list
const printList = (head) => {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.data); // Use `data` instead of `value`
        current = current.next;
    }
    console.log(result.join(" -> ") + " -> NULL");
};

// Example Usage
const head1 = new ListNode(5);
head1.next = new ListNode(10);
head1.next.next = new ListNode(15);
head1.next.next.next = new ListNode(40);
console.log("Head1 List:");
printList(head1);

const head2 = new ListNode(2);
head2.next = new ListNode(3);
head2.next.next = new ListNode(20);
console.log("Head2 List:");
printList(head2);

console.log("Merged List:");
const mergedHead = mergeTwoLists(head1, head2);
printList(mergedHead);
