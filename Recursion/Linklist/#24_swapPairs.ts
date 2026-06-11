/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairsHelper(pHead: ListNode, previous: ListNode, curr: ListNode | null) {
    // Base case
    if (!curr || !curr.next) {
        return pHead.next
    }

    const nextNode = curr.next;
    curr.next = nextNode.next
    nextNode.next = curr;
    previous.next = nextNode

    return swapPairsHelper(pHead, curr, curr.next)
}
function swapPairs(head: ListNode | null): ListNode | null {
    // Create pusdo head 
    let pHead = new ListNode(-1, head)
    let previous = pHead;
    let curr = head;

    // while (curr && curr.next) {
    //     const next = curr.next;
    //     curr.next = next.next;
    //     next.next = curr;
    //     previous.next = next;

    //     previous = curr;
    //     curr = curr.next;
    // }

    // return pHead.next

    return swapPairsHelper(pHead, previous, curr)
};