class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insert(head, insertVal) {
    const newNode = new Node(insertVal);

    if (!head) {  // Step 2
        newNode.next = newNode;
        return newNode;
    }

    let curr = head;

    while (true) {  // Step 3
        if (curr.val <= insertVal && insertVal <= curr.next.val) {
            break;
        }
        if (curr.val > curr.next.val) {
            if (insertVal >= curr.val || insertVal <= curr.next.val) {
                break;
            }
        }
        curr = curr.next;
        if (curr === head) break;
    }

    newNode.next = curr.next;  // Step 4
    curr.next = newNode;

    return head;
}

function traverse(head) {  // Step 5
    if (!head) return;
    let result = [];
    let curr = head;
    do {
        result.push(curr.val);
        curr = curr.next;
    } while (curr !== head);
    result.push(head.val);
    console.log(result.join(" → "));
}

// Example
let head = new Node(1);
let node2 = new Node(3);
let node3 = new Node(4);
head.next = node2;
node2.next = node3;
node3.next = head;

console.log("Before Insertion:");
traverse(head);

head = insert(head, 2);

console.log("After Insertion:");
traverse(head);
