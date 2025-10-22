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
}

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(str) {
    const queue = new Queue();
    const stack = new Stack();

    for (let ch of str) {
        queue.enqueue(ch);
    }

    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }

    let reversed = "";
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    return reversed;
}


const input = "hello";
console.log("Original String:", input);
console.log("Reversed String:", reverseString(input));
