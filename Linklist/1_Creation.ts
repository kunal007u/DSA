

// Create a link list node 
class LinkNode {
    val: any
    next: LinkNode | null

    constructor(x: any) {
        this.val = x;
        this.next = null
    }
}

// Create a linklist it self that has head and connect with the tail elements
class LinkList {
    head: LinkNode | null;
    size: number

    constructor() {
        this.head = new LinkNode(0);
        this.size = 0;
    }

    addAtHead(val: any) {
        this.addAtIndex(0, val)
    }

    addAtTail(val: any) {
        this.addAtIndex(this.size, val)
    }

    addAtIndex(index: number, val: any) {
        let curr: LinkNode | null = this.head
        let newNode = new LinkNode(val)

        if (index > this.size) return
        if (index < 0) return


        for (let i = 0; i < index; i++) {
            curr = curr?.next || null
        }

        if (curr) {
            this.size++
            newNode.next = curr?.next || null
            curr.next = newNode;
        }

    }

    deleteAtIndex(index: number) {
        let curr: LinkNode | null = this.head

        if (index >= this.size) return
        if (index < 0) return

        for (let i = 0; i < index; i++) {
            curr = curr?.next || null
        }

        if (curr) {
            this.size--
            curr.next = curr?.next?.next || null
        }
    }

    get(index: number) {
        let curr: LinkNode | null = this.head
        if (index > this.size) return
        if (index < 0) return

        for (let i = 0; i <= index; i++) {
            curr = curr?.next || null
        }

        if (curr) {
            return curr.val
        }
    }

}



// Test case for:
// ["MyLinkedList","addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"]
// [[],[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]]

const results: any[] = [];
const myList = new LinkList();
results.push(null); // MyLinkedList
results.push(myList.addAtHead(2)); // addAtHead(2)
results.push(myList.deleteAtIndex(1)); // deleteAtIndex(1)
console.log("🚀 ~💀 1_Creation.ts:94 ~💀 myList:", myList);
results.push(myList.addAtHead(2)); // addAtHead(2)
results.push(myList.addAtHead(7)); // addAtHead(7)
results.push(myList.addAtHead(3)); // addAtHead(3)
results.push(myList.addAtHead(2)); // addAtHead(2)
results.push(myList.addAtHead(5)); // addAtHead(5)
results.push(myList.addAtTail(5)); // addAtTail(5)
results.push(myList.get(5)); // get(5)
results.push(myList.deleteAtIndex(6)); // deleteAtIndex(6)
results.push(myList.deleteAtIndex(4)); // deleteAtIndex(4)

console.log("Results:", results);
// Print the list for visual verification
if (myList?.head){

    let curr = myList?.head.next || null
    const arr = [];
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    console.log("Final list:", arr);
}