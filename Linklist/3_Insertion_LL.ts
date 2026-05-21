/*
// #160 
Given the heads of two singly linked - lists headA and headB, return the node at which the two lists intersect.
If the two linked lists have no intersection at all, return null.
The test cases are generated such that there are no cycles anywhere in the entire linked structure.
*/


 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
 

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let a = headA
    let b = headB

    /*
    // Approch : 1 - Loop through 2 list and check one by one if node match then return the ndoe O(n^2)
    while (a != null) {
        b = headB
        while (b != null) {
            if (a === b) {
                return a
            }

            b = b.next!
        }

        a = a.next!
    }
    return null
    */

    /*
    // Approch : 2 - Use set to to store the value of one list and then loop through second list to check if anything matches 

    let tempSet = new Set()

    while (a != null) {
        tempSet.add(a)
        a = a.next!;
    }

    while(b!=null){
        if(tempSet.has(b)){
            return b
        }

        b=b.next!;
    }

    return null
    */

    /*
    // Approch : 3 - the mathamtical way x+z+y = y+z+x

    while (a != b) {
        a = (a === null) ? headB : a.next
        b = (b === null) ? headA : b.next
    }

    return a
    */

    // Approch : 4 - 
        let sizeA = 0;
        let sizeB = 0;

        // 1. Count sizes safely
        while (a !== null) {
            sizeA++;
            a = a.next;
        }
        while (b !== null) {
            sizeB++;
            b = b.next;
        }

        // 2. Reset pointers
        a = headA;
        b = headB;
        let diff = Math.abs(sizeA - sizeB);

        // 3. Align the starting positions
        if (sizeB > sizeA) {
            while (diff > 0 && b !== null) {
                b = b.next;
                diff--;
            }
        } else {
            while (diff > 0 && a !== null) {
                a = a.next;
                diff--;
            }
        }

        // 4. Move both together until they meet (either at a node or at null)
        while (a !== b) {
            a = a ? a.next : null;
            b = b ? b.next : null;
        }

        // This will return the intersection node, or null if they never met
        return a;

};

// Test 1: Intersecting lists
let common = new ListNode(8, new ListNode(10));
let headA = new ListNode(3, new ListNode(7, common));
let headB = new ListNode(99, new ListNode(1, common));
console.log("Test 1 (should be 8):", getIntersectionNode(headA, headB)?.val); 

// Test 2: No intersection
let headA2 = new ListNode(1, new ListNode(2, new ListNode(3)));
let headB2 = new ListNode(4, new ListNode(5));
console.log("Test 2 (should be null):", getIntersectionNode(headA2, headB2));

// Test 3: One list is empty
console.log("Test 3 (should be null):", getIntersectionNode(null, headB2));

// Test 4: Both lists are empty
console.log("Test 4 (should be null):", getIntersectionNode(null, null));

// Test 5: Intersection at head
let head = new ListNode(42, new ListNode(43));
console.log("Test 5 (should be 42):", getIntersectionNode(head, head)?.val);