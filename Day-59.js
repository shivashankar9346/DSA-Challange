class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items);
    }
}
function reverseFirstKElements(queue, K) {

    if (queue.isEmpty() || K <= 0) return;

    const stack = [];
    const n = queue.size();
    const limit = Math.min(K, n);


    for (let i = 0; i < limit; i++) {
        stack.push(queue.dequeue());
    }


    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }


    for (let i = 0; i < n - limit; i++) {
        queue.enqueue(queue.dequeue());
    }
}


let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.printQueue();

reverseFirstKElements(q, 3);
q.printQueue(); 