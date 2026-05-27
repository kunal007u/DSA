
/*
3217. Delete Nodes From Linked List Present in Array

You are given an array of integers nums and the head of a linked list.Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

Example 1:
Input: nums = [1, 2, 3], head = [1, 2, 3, 4, 5]
Output: [4, 5]

Explanation: Remove the nodes with values 1, 2, and 3.

Example 2:
Input: nums = [1], head = [1, 2, 1, 2, 1, 2]
Output: [2, 2, 2]

Explanation: Remove the nodes with value 1.

Example 3:
Input: nums = [5], head = [1, 2, 3, 4]
Output: [1, 2, 3, 4]

Explanation: No node has value 5.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
All elements in nums are unique.
The number of nodes in the given list is in the range[1, 105].
1 <= Node.val <= 105
The input is generated such that there is at least one node in the linked list that has a value not present in nums.

*/


// Approch 1: Using traditional Loop method O(n * m) where, n is nums list and m is nodes list
function modifiedList1(nums: number[], head: ListNode | null): ListNode | null {
    let pHead = new ListNode(0)
    pHead.next = head
    let curr: ListNode | null = pHead

    for (let i = 0; i <= nums.length; i++) {
        while (curr !== null) {
            let nextNodeVal = curr?.next?.val || null
            if (nextNodeVal === nums[i]) {
                curr.next = curr.next!.next;
            }
            else {
                curr = curr?.next;
            }
        }
        curr = pHead
    }
    return pHead.next
};

// Approch 2: Using Set method O(n * m)
function modifiedList2(nums: number[], head: ListNode | null): ListNode | null {
    let pHead = new ListNode(0)
    pHead.next = head;
    let curr: ListNode | null = pHead
    
    let newSet = new Set()

    // N time 
    for (let i = 0; i <= nums.length; i++) {
        newSet.add(nums[i])
    }

    // M time
    while (curr !== null) {
        let nextNodeVal = curr?.next?.val || null
        if (newSet.has(nextNodeVal)) {
            curr.next = curr.next!.next;
        }
        else {
            curr = curr.next;
        }
    }
    curr = pHead
    return pHead.next
};