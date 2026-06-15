/**
 155. Min Stack

-->  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int value) pushes the element value onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.


Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin. 

*/

// Approch - 1: We will take 2 stacks one for normal values and one for carry minimum values 
// problem: in  minStack: Array<number>; we are adding duplicate numbers again and agian let's say  there are 100k -2 which is minimum value too then minstack will be filled 100k time eventhough the minimum value is same 

// Approch- 2: it's same as approch 1 we will have 2 stacks but this time instead of  minStack: Array<number>;  we will have  minStack: Array<minNode>;  minNode carry min - value and count 
// now if we got 100k -2 then every time instead of adding that value in the stack we will simply just add count to 1 


// Approch - 1
class MinStackAP1 {
    arr: Array<number>;
    minStack: Array<number>;

    constructor() {
        this.arr = []
        this.minStack = []
    }

    push(value: number): void {
        this.arr.push(value)
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value)
        }
        return
    }

    pop(): void {
        let removedElm = this.arr.pop();
        if (removedElm == this.getMin()) {
            this.minStack.pop()
        }
        return
    }

    top(): number {
        return this.arr[this.arr.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

// Approch 2 
class MinNode {
    min: number;
    count: number;

    constructor(min: number, count: number) {
        this.min = min;
        this.count = count || 0;
    }
}

class MinStackAP2 {
    arr: Array<number>;
    minStack: Array<MinNode>;

    constructor() {
        this.arr = [];
        this.minStack = [];
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    push(value: number): void {
        if (this.isEmpty()) {
            this.arr.push(value)
            this.minStack.push(new MinNode(value, 1))
            return
        }

        this.arr.push(value)
        let minTop = this.minStack[this.minStack.length - 1];

        if (minTop.min === value) {
            minTop.count += 1
        } else if (value < minTop.min) {
            this.minStack.push(new MinNode(value, 1))
        }
    }

    pop(): void {
        if (this.isEmpty()) return;
        const removedValue = this.arr.pop();
        let minTop = this.minStack[this.minStack.length - 1];

        if (removedValue === minTop.min) {
            if (minTop.count > 1) {
                minTop.count = - 1
            } else {
                this.minStack.pop()
            }
        }
    }

    top(): number {
        return this.arr[this.arr.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1].min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */