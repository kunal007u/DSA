function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let curr = head

    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }

    return prev
};