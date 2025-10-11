class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    findMiddle() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        console.log("Middle element:", slow.data);
    }
}

let list = new singleLinkedList();

list.insert(1)
list.insert(2)
list.insert(3)
list.display()
list.findMiddle()
list.insert(4)
list.display()
list.findMiddle()