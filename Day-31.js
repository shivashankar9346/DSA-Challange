class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtHead(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    deleteByValue(data) {
        if (!this.head)
             return;
        if (this.head.data === data) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            return;
        }
        let prev = this.head;
        let current = this.head.next;
        while (current) {
            if (current.data === data) {
                prev.next = current.next;
                if (!current.next) {
                    this.tail = prev; 
                }
                return;
            }
            prev = current;
            current = current.next;
        }

        console.log("Value not found");
    }
    getLength() {
        let count = 0, current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    deleteAtPosition(index) {
        let length = this.getLength();

        if (index < 0 || index >= length) {
            console.log("Invalid deletion");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            return;
        }
        let count = 0;
        let current = this.head;
        while (count < index - 1) {
            current = current.next;
            count++;
        }

        let delNode = current.next;
        current.next = delNode.next;

        if (!current.next) {
            this.tail = current; 
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + "->";
            current = current.next;
        }
        console.log(result + "null");
        return result;
    }
}

let list = new LinkedList();

list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtTail(40);
list.printList();          

list.deleteByValue(20);    
list.deleteAtPosition(1);  
list.printList();        
         


