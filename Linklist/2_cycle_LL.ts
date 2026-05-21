// leetcode#141  leetcode#142


class CycleListNode {
    val: number
    next: CycleListNode | null
    constructor(val?: number, next?: CycleListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * leetcode#141
* Given head, the head of a linked list, determine if the linked list has a cycle in it.
* There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
* Return true if there is a cycle in the linked list. Otherwise, return false.
* 
* Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 */


function hasCycle(head: CycleListNode | null): boolean {
    if (!head || !head.next) return false
    let slow: CycleListNode | null = head //will make jump 1 step at a time
    let fast: CycleListNode | null = head // will make jump 2 step at a time

    while (fast !== null) {

        if (slow === fast) {
            return true
        }

        slow = slow?.next || null
        fast = fast?.next?.next || null

    }

    return false

}

/**
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). 
It is -1 if there is no cycle. Note that pos is not passed as a parameter.
Do not modify the linked list.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
 */

function detectCycle(head: CycleListNode | null): CycleListNode | null {
    if (!head || !head.next) return null
    let slow: CycleListNode | null = head
    let fast: CycleListNode | null = head

    while (true) {
        if (fast == null || fast.next === null) {
            return null
        }

        fast = fast?.next?.next
        slow = slow?.next || null

        if (slow == fast) {
            break;
        }
    }

    fast = head

    while (slow !== fast) {
        fast = fast?.next || null
        slow = slow?.next || null
    }

    return fast


}
