class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.head = newNode;
        }
    }

    insertAtEnd(data) {
        const newNode = new Node(data)

        if (!this.head) {
            this.head = this.tail = newNode;
            this.head.prev = newNode;
            this.tail.next = newNode
        } else {
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
        }
    }
    traverseForward() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        const result = [];
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);

        console.log(result.join(" <-> "));
    }
    traverseMutliple(times = 1) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        const result = [];
         let count = 0;

        while (count < times) {  // number of full loops
            do {
                result.push(current.data);
                current = current.next;
            } while (current !== this.head);
            count++;
        }

        console.log(result.join(" <-> "));

    }
}


let list = new CircularDoubleLinkedList();

list.insertAtEnd("ALice")
list.insertAtEnd("Bob")
list.insertAtEnd("charlie")
list.insertAtHead("Zara")
list.insertAtHead("Sara")



list.traverseForward();
list.traverseMutliple(3);
