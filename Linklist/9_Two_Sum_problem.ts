/*2. : Add Two Numbers

--> You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order, and each of their nodes contains a single digit.Add the two numbers and return the sum as a linked list.

--> You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:
    
    Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
    Output: [7, 0, 8]
    Explanation: 342 + 465 = 807.

Example 2:

    Input: l1 = [0], l2 = [0]
    Output: [0]

Example 3:

    Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
    Output: [8, 9, 9, 9, 0, 0, 0, 1]


Constraints:

    The number of nodes in each linked list is in the range[1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.
*/


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 1. Initialize runner pointers for traversing both input lists
    let p1 = l1;
    let p2 = l2;

    // 2. Create a dummy node (value 0) to anchoring the start of the result list
    let pHead = new ListNode(0);

    // 3. 'temp' acts as our moving chain constructor (tail runner)
    let temp = pHead;

    // 4. Track values overflowing from the ones place to tens place
    let carry = 0;

    // 5. Loop runs if List1 has digits OR List2 has digits OR a leftover carry remains
    while ((p1 !== null || p2 !== null) || carry > 0) {
        let sum = 0;

        // 6. Safely sum values using optional chaining (?.) and fall back to 0 if null
        sum = carry + (p1?.val ?? 0) + (p2?.val ?? 0);

        // 7. Calculate new carry (e.g., 14 / 10 = 1)
        carry = Math.floor(sum / 10);

        // 8. Calculate digit for current position (e.g., 14 % 10 = 4)
        let reminder = sum % 10;

        // 9. Generate new node with single digit and attach to result chain
        temp.next = new ListNode(reminder);

        // 10. Advance our result builder to the newly created node
        temp = temp.next;

        // 11. Safely advance input list pointers; fall back to null if end reached
        p1 = p1?.next || null;
        p2 = p2?.next || null;
    }

    // 12. Skip dummy node 0 and return head of newly constructed sum list
    return pHead.next;
}
