class MyCircularQueue {
    arr: Array<number | null>
    head: number
    count: number
    maxSize: number

    constructor(k: number) {
        this.arr = Array(k)
        this.head = 0;
        this.maxSize = k
        this.count = 0; //number of count of elemet store in the array 
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false

        this.arr[(this.head + this.count) % this.maxSize] = value
        this.count++

        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false

        this.arr[this.head] = null;
        this.count--
        this.head = (this.head + 1) % this.maxSize
        return true
    }

    Front(): number {
        if (this.isEmpty()) return -1
        return this.arr[this.head] as number
    }

    Rear(): number {
        if (this.isEmpty()) return -1
        return this.arr[((this.head + this.count) - 1) % this.maxSize] as number
    }

    isEmpty(): boolean {
        return this.count === 0
    }

    isFull(): boolean {
        return this.count === this.maxSize
    }
}


var obj = new MyCircularQueue(3)
var param_1 = obj.enQueue(12)
var param_2 = obj.deQueue()
var param_3 = obj.Front()
var param_4 = obj.Rear()
var param_5 = obj.isEmpty()
var param_6 = obj.isFull()
