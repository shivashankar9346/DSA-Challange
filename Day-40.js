class Node {
    constructor(post) {
        this.post = post;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertPostAtHead(post) {
        let newNode = new Node(post);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    deletePostAtTail() {
        if (!this.tail) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    deletePostAtIndex(index) {
        if (index < 0) return;
        let cur = this.head;
        let i = 0;
        while (cur && i < index) {
            cur = cur.next;
            i++;
        }
        if (!cur) return;
        if (cur === this.head) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
        } else if (cur === this.tail) {
            this.deletePostAtTail();
        } else {
            cur.prev.next = cur.next;
            cur.next.prev = cur.prev;
        }
    }

    getLength() {
        let len = 0;
        let cur = this.head;
        while (cur) {
            len++;
            cur = cur.next;
        }
        return len;
    }

    showFeedForward() {
        let res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.post);
            cur = cur.next;
        }
        console.log(res.join(" → "));
    }

    showFeedBackward() {
        let res = [];
        let cur = this.tail;
        while (cur) {
            res.push(cur.post);
            cur = cur.prev;
        }
        console.log(res.join(" → "));
    }
}

let feed = new DoubleLinkedList();
feed.insertPostAtHead("Hello");
feed.insertPostAtHead("DSA Day 40");
feed.insertPostAtHead("Linked Lists are fun!");
feed.showFeedForward();
feed.deletePostAtIndex(1);
feed.showFeedForward();
feed.deletePostAtTail();
feed.showFeedForward();
feed.showFeedBackward();
