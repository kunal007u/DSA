/*21. : Merge Two Sorted Lists
--> You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list.The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.


Example 1:
Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
Output: [1, 1, 2, 3, 4, 4]

Example 2:
Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range[0, 50].
- 100 <= Node.val <= 100
Both list1 and list2 are sorted in non - decreasing order.
*/

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null

    // Use two pointer methods and point them to first element of the list for list1 and list2
    let p1 = list1
    let p2 = list2
    let mergedList: ListNode | null = new ListNode(0)
    let temp = mergedList

    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            temp.next = p1
            p1 = p1.next
        }
        else if (p2.val <= p1.val) {
            temp.next = p2
            p2 = p2.next

        }
        temp = temp.next!
    }
    while (p1 !== null) {
        temp.next = p1
        p1 = p1.next;
        temp = temp.next

    }

    while (p2 !== null) {
        temp.next = p2
        p2 = p2.next;
        temp = temp.next
    }

    return mergedList.next
};