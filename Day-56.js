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

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
function dailyTemperatures(temperatures) {
    const stack = new Stack();
    const n = temperatures.length;
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return result;
}



console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));