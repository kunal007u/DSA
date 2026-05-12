// Create the linklist in JS 

/* 
--> To create a linklist we need to create a node first
--> Now we got the Node blueprint so we can create as many node we want to 
--> we create a node with the data argument and the next pointer which is null by default
--> Second step will be to create a linklist class which will have the head pointer (the first node) 
*/

// Node class
class ListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Linklist class
class Linklist {
    constructor(head = null){
        this.head = head;
    }
}

// Now we can create a linklist and add some nodes to it
const node1 = new ListNode(10);
const node2 = new ListNode(20);
const node3 = new ListNode(30);

// Now we will link the nodes together
node1.next = node2;
node2.next = node3;
node3.next = null; // This is optional as it is already null by default

// Now we will create a linklist and set the head to the first node
const myLinklist = new Linklist(node1);

// Now we have a linklist with 3 nodes and the head pointing to the first node
console.log(myLinklist.head.next.next.data); 