/*

61. Rotate List
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:
The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/ 



function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head

    // step 1: Find the size of the LL and the last node of the LL
    let currToFindTheSize: ListNode | null = head
    let lastNode = head
    let size = 0;

    while (currToFindTheSize !== null) {
        lastNode = currToFindTheSize;
        currToFindTheSize = currToFindTheSize.next;
        size++
    }

    // step 2: Normalize k and calculate the breaking point
    k = k % size;
    if (k === 0) return head; // Edge case: if k matches size, no rotation happens

    let diff = size - k; // No Math.abs needed anymore since k is now smaller than size
    let tailHead = head
    let headLastNode = head

    while (diff !== 0) {
        headLastNode = tailHead
        tailHead = tailHead.next!
        diff--
    }

    // step 3: Sever the old links and stitch the loops together
    headLastNode.next = null
    lastNode.next = head; // 👈 Connects the old tail to the old head

    return tailHead;
};
