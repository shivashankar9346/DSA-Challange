class Stack {
    constructor(limit) {
        this.stack = [];
        this.limit = limit;
        this.top = -1
    }
    push(element) {
        this.top++
        this.stack[this.top] = element;
        console.log(` Pushed ${element}`);

    }
    pop() {
        if (this.top === -1) {
            console.log("Stack Underflow ❌");
            return;
        }
        const removed = this.stack[this.top]
        this.top--
        console.log(` Popped ${removed}`);

    }
    peek() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }
        console.log(`Top element: ${this.stack[this.top]}`);
    }
    display() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }


        let result = [];
        for (let i = this.top; i >= 0; i--) {
            result.push(this.stack[i]);
        }
        console.log("Stack elements:", result.join(" "));
    }
}
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop()
stack.peek()
stack.display()