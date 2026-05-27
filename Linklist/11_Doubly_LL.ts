class DoublyLinkNode {
    val: number;
    next: DoublyLinkNode | null;
    prev: DoublyLinkNode | null;

    constructor(val: number) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class MyDoublyLinkedList {
    head: DoublyLinkNode;
    tail: DoublyLinkNode;
    size: number;

    constructor() {
        this.head = new DoublyLinkNode(0);
        this.tail = new DoublyLinkNode(0);

        this.head.next = this.tail;
        this.tail.prev = this.head

        this.size = 0;
    }

    addAtIndex(index: number, val: any) {
        // Approch 1:
        if (index < 0 || index > this.size) return
        let newNode = new DoublyLinkNode(val)

        if (index <= Math.floor(this.size / 2)) {

            let curr = this.head;

            for (let i = 0; i < index; i++) {
                curr = curr.next!
            }

            // 1. Hook up the new node's arrows first (Safe)
            newNode.prev = curr;
            newNode.next = curr.next;

            // 2. Fix the back-link BEFORE changing curr.next
            curr.next!.prev = newNode;

            // 3. Finally, change curr.next last
            curr.next = newNode;

        }
        else{
            let curr = this.tail;

            // 1. Loop backward only by the remaining distance from the tail
            let stepsFromBack = this.size - index;
            for (let i = 0; i < stepsFromBack; i++) {
                curr = curr.prev!;
            }
            
            // 2. Hook up newNode's arrows safely first
            newNode.next = curr;
            newNode.prev = curr.prev;

            // 3. Fix the existing nodes' links around it
            curr.prev!.next = newNode; // Connect the left neighbor to newNode
            curr.prev = newNode;       // Connect curr back to newNode

        }

        this.size++

    }

    deleteAtIndex(index: number) {
        if (index < 0 || index >= this.size) return

        if (index <= Math.floor(this.size / 2)) {

            let curr = this.head;

            for (let i = 0; i < index; i++) {
                curr = curr.next!
            }

            let toDelete = curr.next!
            let nextNode = toDelete.next!;
            curr.next = nextNode
            nextNode.prev = curr

        }
        else {

            let curr = this.tail;

            for (let i = 0; i < this.size - index; i++) {
                curr = curr.prev!
            }

            let toDelete = curr.prev!
            let prevNode = toDelete.prev!;
            curr.prev = prevNode
            prevNode.next = curr
        }

        this.size--
    }

}