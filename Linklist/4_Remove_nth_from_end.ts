/*
#19

-->  Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1, 2, 3, 4, 5], n = 2
Output: [1, 2, 3, 5]

Example 2:
Input: head = [1], n = 1
Output: []

**/



function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Create sudo node with value 0
    let pHead: ListNode | null = new LinkNode(0)
    let curr: ListNode | null = pHead
    let size: number = 0
    let diff: number = 0

    // we need the difference to reach the element - 1 index to delete the given nth 
    while (curr.next != null) {
        curr = curr.next;
        size++
    }

    // we got the size now check the differnce loop through the list till the diff -1 and you will be at the right index

    diff = size - n
    let temp: ListNode | null = pHead
    for (let i = 0; i < diff; i++) {
        temp = temp?.next || null
    }

    if(temp) temp.next = temp?.next?.next || null
    return pHead.next
}