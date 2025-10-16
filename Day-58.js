class queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }
    size(){
        return this.items.length
    }
}
let newQueue = new queue();
newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);

console.log(newQueue.items);  
console.log(newQueue.dequeue());
console.log(newQueue.peek());
console.log(newQueue.size());
