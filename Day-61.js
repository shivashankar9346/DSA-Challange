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

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function firstNegativeInWindow(A, K) {
    let queue = new Queue();
    let result = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) queue.enqueue(i);

        if (!queue.isEmpty() && queue.front() <= i - K) {
            queue.dequeue();
        }

        if (i >= K - 1) {
            if (!queue.isEmpty()) {
                result.push(A[queue.front()]);
            } else {
                result.push(0);
            }
        }
    }

    return result;
}

let A = [12, -1, -7, 8, -15, 30, 16, 28];
let K = 3;

console.log(firstNegativeInWindow(A, K).join(" "));

