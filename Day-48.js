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
        this.tail = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
            newNode.next = newNode
            return
        }

        let current = this.head;

        if (data < this.head.data) {

            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
            this.head = newNode;
            return;

        }
        while (current.next !== this.head && current.next.data < data) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    delete(index) {
        if (!this.head) return;
        if (index < 1) {
            console.log("Invalid index (index starts from 1)");
            return;
        }

        let current = this.head;

        if (index === 1) {

            if (current.next === this.head) {
                this.head = null;
                return;
            }


            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = this.head.next;
            this.head = this.head.next;
            return;
        }
        let prev = this.head;
        let currentIndex = 2;
        current = this.head.next;
        while (current !== this.head) {
            if (currentIndex === index) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
            currentIndex++;
        }
    }

    traverse() {
        const result = [];
        if (!this.head) return result;
        let current = this.head;

        do {
            result.push(current.data);
            current = current.next;

        } while (current !== this.head)
        return result;
    }
}

let list = new circularLinkedList();

list.insert("Alice")
list.insert("Bob")
list.insert("Charlie")
list.insert("Diana")
console.log(list.traverse());

list.delete(2);
console.log(list.traverse());

