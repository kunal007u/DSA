/*
234. 
Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1, 2, 2, 1]
Output: true

Example 2:
Input: head = [1, 2]
Output: false


Constraints:

The number of nodes in the list is in the range[1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space ?
*/

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return false

    // find the middle element or node

    let fast = head
    let slow = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    // At this point the slow pointer is on the middle node 
    // now just revese the half (from slow) LL 

    let prev:ListNode| null = null
    let curr:ListNode|null = slow

    while (curr !== null) {
        let temp: ListNode| null= curr.next;
        curr.next = prev
        prev = curr
        curr = temp
    }

    // At this point the prev will hold the reverse Link List 
    // Now just loop through both half and if you find the unmatched value then just return false 

    let fistHalf = head;
    let secondHalf = prev;

    while (secondHalf !== null) {
        if (fistHalf.val !== secondHalf.val) {
            return false
        }

        secondHalf = secondHalf.next
        fistHalf = fistHalf.next!
    }

    return true
}