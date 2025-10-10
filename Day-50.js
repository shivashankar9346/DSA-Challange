class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
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

    reverse() {
        let prev = null;
        let current = this.head;
        let nextNode = null;

        while (current) {
            nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }

        this.head = prev;
    }
}


let list = new SingleLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.display();

list.reverse();
list.display();
