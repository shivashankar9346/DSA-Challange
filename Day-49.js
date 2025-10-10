class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}
class circularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }
    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    delete(index) {
        if (!this.head) return;

        if (index < 1) {
            console.log("invalid");

        }
        if (index === 1) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.tail.next = this.head;
            }
            return;
        }
        let current = this.head;
        let prev = null;
        let count = 1;
        while (count < index && current.next !== this.head) {
            prev = current;
            current = current.next;
            count++;
        }

        if (count !== index) return;
        prev.next = current.next;
        if (current === this.tail) {
            this.tail = prev;
        }


    }

    display() {
        let result = [];
        let current = this.head;

        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head)
        console.log(result.join("->"));
    }
    
    rotateAndShow(k) {
        if (!this.head) return console.log("Empty list");

        let current = this.head;
        for (let i = 1; i < k; i++) {
            current = current.next;
        }
        console.log(`Current element at position ${k}: ${current.data}`);
        return current.data;
    }

}

let list = new circularLinkedList();

list.insert("Nike");
list.insert("Adidas");
list.insert("Puma");
list.insert("Reedbok");
list.rotateAndShow(3); 

list.display()
list.delete(2)
list.display()

list.rotateAndShow(1); 
list.rotateAndShow(5);